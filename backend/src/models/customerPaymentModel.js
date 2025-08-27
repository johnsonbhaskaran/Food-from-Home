import mongoose from "mongoose";

const customerPaymentSchema = new mongoose.Schema({});

export const CustomerPayment = mongoose.model("CustomerPayment", customerPaymentSchema);

/* -----------------------------------------------------------------/
                    ** CustomerPayment
                   date, type, status, transactionID, orderID
/------------------------------------------------------------------*/
