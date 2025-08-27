import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({});

export const Delivery = mongoose.model("Delivery", deliverySchema);

/* -----------------------------------------------------------------/
                    ** Delivery
                   dateTime, status, itemOrderID, orderBagID, paymentTransactionID
/------------------------------------------------------------------*/
