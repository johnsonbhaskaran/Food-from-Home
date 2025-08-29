import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    customer: [
      {
        messageContent: { type: String, default: "" },
        dateTime: { type: Date, required: true, default: Date.now },
        readReciept: { type: Boolean },
        storeID: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
        orderID: { type: mongoose.Schema.Types.ObjectId, ref: "orderBag" },
      },
    ],
    chef: [
      {
        messageContent: { type: String, default: "" },
        dateTime: { type: Date, required: true, default: Date.now },
        readReciept: Boolean,
        customerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
        orderID: { type: mongoose.Schema.Types.ObjectId, ref: "orderBag" },
      },
    ],
  },
  { timestamps: true }
);

export const Chat = mongoose.model("Chat", chatSchema);

/* -----------------------------------------------------------------/
                    ** Chat
                   customerChat [messageContent, dateTime, readReciept, storeID, orderID]
                   chefChat [messageContent, dateTime, readStatus, customerID, orderID]
/------------------------------------------------------------------*/
