import mongoose from "mongoose";

const chefStoreSchema = new mongoose.Schema({});

export const ChefStore = mongoose.model("ChefStore", chefStoreSchema);

/* -----------------------------------------------------------------/
                    **STORE
                   name, chef, zone, foodList, discount, bannerImage, description, additionalInfo, salesCount [today, total], location, address, popularityRank, trendingScore, todaysSpecial, tags, isStoreOpen, openTimings, completedOrders, pendingOrders, onGoingOrders, earnings [today, total], payout [pending, history],
/------------------------------------------------------------------*/
