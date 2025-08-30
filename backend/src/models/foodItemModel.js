import mongoose, { Schema } from "mongoose";

const foodItemSchema = new mongoose.Schema(
  {
    foodItem: {
      name: { type: String, required: true },
      store: { type: Schema.Types.ObjectId, ref: "ChefStore", required: true },
      ingredients: { type: [String], required: true },
      category: { type: [String], required: true },
      tags: { type: [String], required: true },
      isVeg: { type: Boolean, required: true },
      discount: Number,
      size: { type: String, enum: ["small", "medium", "large", "x-large"] },
      weight: { type: Number, min: 10, max: 2000 },
      volume: { type: Number, min: 100, max: 1000 },
      unit: {
        type: String,
        enum: ["g", "ml"],
      },
      images: { type: [String], required: true },
      description: { type: String, maxlength: 200 },
      additionalInfo: { type: String, maxlength: 200 },
      preparationTime: { type: Number, required: true },
      isTodaysSpecial: Boolean,
      pricePerUnit: { type: Number, required: true },
      starRatings: { type: Number, min: 0, max: 5 },
      popularityRank: { type: Number, default: 0 },
      trendingScore: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export const FoodItem = mongoose.model("FoodItem", foodItemSchema);

/* -----------------------------------------------------------------/
                    **FOOD
                   name, store, ingredients, category, tags, isVeg, discount, size, weight, volume, unit, images, description, additionalInfo, prepartionTime, isTodaySpecial, pricePerUnit, starRatings, popularityRank, trendingScore,
/------------------------------------------------------------------*/
