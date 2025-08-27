import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({});

export const FoodItem = mongoose.model("FoodItem", foodItemSchema);

/* -----------------------------------------------------------------/
                    **FOOD
                   name, ingredients, category, isVeg, discount, size, weight, volume, unit, images, description, additionalInfo, prepartionTime, saleCount, popularityRank, trendingScore, isTodaySpecial, tags, pricePerUnit
/------------------------------------------------------------------*/
