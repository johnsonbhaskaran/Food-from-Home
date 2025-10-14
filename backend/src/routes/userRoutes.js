import { Router } from "express";
import { deleteUser, updateUser, addUserDetails } from "../controllers/userController.js";
import { verifyToken } from "../controllers/functions.js";

const router = Router();

router.put("/:id", verifyToken, updateUser);
router.post("/:id", verifyToken, addUserDetails);
router.delete("/:id", verifyToken, deleteUser);

export default router;
