/* eslint-disable no-undef */
import "dotenv/config.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("verifyToken");
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json("Access token missing or invalid");
  }

  const accessToken = authHeader.split(" ")[1];

  console.log(accessToken);

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).json("Token invalid");
    req.user = payload;
    next();
  });
};
