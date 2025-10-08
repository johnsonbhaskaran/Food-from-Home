import mongoose from "mongoose";

const chefStoreSchema = new mongoose.Schema(
  {
    store: {
      name: { type: String, required: true },
      chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
      location: {
        city: {
          type: String,
          enum: ["chennai", "ahmedabad", "bengaluru", "delhi", "hyderabad", "kolkata", "mumbai"],
        },
        state: String,
        zone: {
          type: Number,
          required: true,
          validate: {
            validator: function (v) {
              return v.every((p) => /^[0-9]{6}$/.test(p.toString()));
            },
          },
        },
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        DIGIPIN: String,
        plusCodes: String,
        what3words: String,
      },
      address: {
        line1: {
          type: String,
          required: true,
        },
        line2: {
          type: String,
        },
      },
      foodlist: [{ item: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" } }],
      discount: Number,
      bannerImages: [String],
      description: String,
      additionalInfo: String,
      salesCount: {
        today: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
      },
      todaysSpecial: [String],
      tags: [String],
      isStoreOpen: { type: Boolean, default: true },
      openTimings: {
        day: {
          from: { type: Number, default: 0, required: true },
          to: { type: Number, default: 0, required: true },
        },
        night: {
          from: { type: Number },
          to: { type: Number },
        },
      },
      onGoingOrders: { type: Number },
      pendingOrders: { type: Number },
      completedOrders: { type: Number },
      earnings: {
        today: { type: Number, default: 0 },
        total: { type: Number, default: 0 },
      },
      payout: { type: mongoose.Schema.Types.ObjectId, ref: "ChefPayout" },
      popularityRank: { type: Number, default: 0 },
      trendingScore: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export const ChefStore = mongoose.model("ChefStore", chefStoreSchema);

/* -----------------------------------------------------------------/
                    **STORE
                   name, chef, location [city, zone, latitude, longitude], foodList, discount, bannerImage, description, additionalInfo, salesCount [today, total], address [line1, line2], todaysSpecial, tags, isStoreOpen, openTimings, completedOrders, pendingOrders, onGoingOrders, earnings [today, total], payout [pending, history], popularityRank, trendingScore
/------------------------------------------------------------------*/
