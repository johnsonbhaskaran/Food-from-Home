import mongoose from "mongoose";

const chefStoreSchema = new mongoose.Schema({});

export const ChefStore = mongoose.model("ChefStore", chefStoreSchema);

/* -----------------------------------------------------------------/
                    **STORE
                   name, zone, profileImage, bannerImage, description, additionalInfo, speciality, totalSalesCount, todaysSalesCount, location, address, popularityRank, trendingScore, todaysSpecial, tags
/------------------------------------------------------------------*/
