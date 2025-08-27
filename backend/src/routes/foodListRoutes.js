import { Router } from "express";
import {
  getAllFoodItems,
  createFoodItem,
  getFoodItem,
  updateFoodItem,
  deleteFoodItem,
} from "../controllers/foodListController.js";

const router = Router();

router.route("/").get(getAllFoodItems).post(createFoodItem);
router.route("/:id").get(getFoodItem).put(updateFoodItem).delete(deleteFoodItem);

export default router;
