import { Router } from "express";
import {
  customerLogin,
  customerRegister,
  chefLogin,
  chefRegister,
} from "../controllers/authController.js";

const router = Router();

router.route("/login/customer").post(customerLogin);
router.route("/login/chef").post(chefLogin);
router.route("/register/customer").post(customerRegister);
router.route("/register/chef").post(chefRegister);

export default router;
