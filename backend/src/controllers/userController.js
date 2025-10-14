import { Customer } from "../models/customerModel.js";
import "dotenv/config.js";

/* -----------------------------------------------------------------/
                    * Update User *
/------------------------------------------------------------------*/

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { newUsername } = req.body;

  console.log("PUT endpoint", id, req.user);

  const user = await Customer.findByIdAndUpdate(id, { username: newUsername });
  console.log(user);
  if (user?.isChef) return res.status(200).json("Chef details updated");
  res.status(200).json("User details updated");
};

/* -----------------------------------------------------------------/
                    * Add User Details *
/------------------------------------------------------------------*/

const addUserDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Customer.findOneAndUpdate(
      { userAuthId: id },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    console.log(user);
    res.status(200).json({ message: "Details added to the User document", user });
  } catch (err) {
    console.log(err);
    res.status(403).json("Error adding details");
  }
};

/* -----------------------------------------------------------------/
                    * Delete User *
/------------------------------------------------------------------*/

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await Customer.findByIdAndDelete(id);
  console.log(user);
  res.status(200).json("User deleted");
};

export { deleteUser, updateUser, addUserDetails };
