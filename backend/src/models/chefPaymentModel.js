import mongoose from "mongoose";

const chefPaymentSchema = new mongoose.Schema({});

export const ChefPayment = mongoose.model("ChefPayment", chefPaymentSchema);

/* -----------------------------------------------------------------/
                    ** ChefPayment
                   date, type, status, amount, transactionID, orderID
/------------------------------------------------------------------*/
