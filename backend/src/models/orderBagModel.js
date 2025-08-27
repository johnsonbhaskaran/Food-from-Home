import mongoose from "mongoose";

const orderBagSchema = new mongoose.Schema({});

export const OrderBag = mongoose.model("OrderBag", orderBagSchema);

/* -----------------------------------------------------------------/
                    ** OrderBag
                   itemName, itemQuantity, itemSize, itemPrice, itemInstruction, itemOrderID, itemOrderTime, totalPrice, orderBagID
/------------------------------------------------------------------*/
