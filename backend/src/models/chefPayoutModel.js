import mongoose from "mongoose";

const chefPayoutSchema = new mongoose.Schema({});

export const ChefPayout = mongoose.model("ChefPayout", chefPayoutSchema);

/* -----------------------------------------------------------------/
                    ** ChefPayout
                   date, type, status, amount, transactionID, orderID
/------------------------------------------------------------------*/
