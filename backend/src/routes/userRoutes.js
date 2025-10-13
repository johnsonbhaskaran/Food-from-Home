import { Router } from "express";
import { getUser, deleteUser, updateUser } from "../controllers/userController.js";

const router = Router();

router.route("/:id").get(getUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

export default router;
