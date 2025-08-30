import mongoose, { Schema } from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    notify: {
      customer: {
        name: { type: Schema.Types.ObjectId, ref: "Customer" },
        orderStatus: { type: Schema.Types.ObjectId, ref: "ChefStore" },
        paymentStatus: { type: Schema.Types.ObjectId, ref: "CustomerPayment" },
        chefChat: { type: Schema.Types.ObjectId, ref: "Chat" },
        orderBag: { type: Schema.Types.ObjectId, ref: "OrderBag" },
        offers: [String],
      },
      chef: {
        name: { type: Schema.Types.ObjectId, ref: "Chef" },
        store: { type: Schema.Types.ObjectId, ref: "ChefStore" },
        deliveryStatus: { type: Schema.Types.ObjectId, ref: "Delivery" },
        customerChat: { type: Schema.Types.ObjectId, ref: "Chat" },
        orderBag: { type: Schema.Types.ObjectId, ref: "OrderBag" },
        payoutInfo: { type: Schema.Types.ObjectId, ref: "ChefPayout" },
      },
    },
  },
  { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);

/* -----------------------------------------------------------------/
                    ** Notification
                    notify-Customer [name, orderStatus, chefChat, orderID, offers]
                   notify-Chef [name, store, payoutInfo, deliveryStatus, orderID, customerChat, storeID]
/------------------------------------------------------------------*/
