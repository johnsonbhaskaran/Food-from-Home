/* eslint-disable no-undef */
import { UserAuth } from "../models/userAuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

/* -----------------------------------------------------------------/
                    * Customer Auth *
/------------------------------------------------------------------*/

const customerLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) return res.status(401).json("All fields are mandatory!");

  try {
    //? Find user by username
    const userFromDB = await UserAuth.findOne({ username });

    if (!userFromDB) return res.status(400).json("User not found!");

    const passMatch = await bcrypt.compare(password, userFromDB.password);

    if (!passMatch) return res.status(400).json("Invalid credentials!");

    //? Generate JWT token
    const token = jwt.sign(
      { id: userFromDB._id, isChef: userFromDB.isChef },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Customer Logged In",
      user: {
        id: userFromDB._id,
        username: userFromDB.username,
        email: userFromDB.email,
        isChef: userFromDB.isChef,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal Server Error");
  }
};

const customerRegister = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email && !password) return res.status(403).json("All fields are mandatory!");

  // Hashed password

  const saltRounds = 10;

  const hashPasswordFunc = async (password) => {
    try {
      const passwordHash = await bcrypt.hash(password, saltRounds);
      return passwordHash;
    } catch (err) {
      console.log("Error hashing password", err);
    }
  };

  const HPassword = await hashPasswordFunc(password);

  const newCustomer = new UserAuth({
    username,
    email,
    password: HPassword,
  });
  const savedUser = await newCustomer.save();

  const token = jwt.sign({ id: savedUser._id, isChef: savedUser.isChef }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(201).json({
    message: "Customer Registered successfully!",
    user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
    token,
  });
};

/* -----------------------------------------------------------------/
                    * Chef Auth *
/------------------------------------------------------------------*/

const chefLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) return res.status(401).json("All fields are mandatory!");

  try {
    //? Find user by username
    const chefFromDB = await UserAuth.findOne({ username });

    if (!chefFromDB) return res.status(400).json("User not found!");

    if (chefFromDB.isChef !== true) return res.status(401).json("Chef access required to login!");

    const passMatch = await bcrypt.compare(password, chefFromDB.password);

    if (!passMatch) return res.status(400).json("Invalid credentials!");

    //? Generate JWT token
    const token = jwt.sign(
      { id: chefFromDB._id, isChef: chefFromDB.isChef },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Chef Logged In successfully",
      chef: {
        id: chefFromDB._id,
        username: chefFromDB.username,
        email: chefFromDB.email,
        isChef: chefFromDB.isChef,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Internal Server Error");
  }
};

const chefRegister = async (req, res) => {
  const { username, email, password, isChef = true } = req.body;

  if (!username && !email && !password && !isChef)
    return res.status(403).json("All fields are mandatory!");

  // Hashed password

  const saltRounds = 10;

  const hashPasswordFunc = async (password) => {
    try {
      const passwordHash = await bcrypt.hash(password, saltRounds);
      return passwordHash;
    } catch (err) {
      console.log("Error hashing password", err);
    }
  };

  const HPassword = await hashPasswordFunc(password);

  const newChef = new UserAuth({
    username,
    email,
    password: HPassword,
    isChef,
  });
  const savedChef = await newChef.save();

  const token = jwt.sign({ id: savedChef._id, isChef: savedChef.isChef }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.status(201).json({
    message: "Chef Registered successfully!",
    user: { id: savedChef._id, username: savedChef.username, email: savedChef.email },
    token,
  });
};

export { customerLogin, customerRegister, chefLogin, chefRegister };
