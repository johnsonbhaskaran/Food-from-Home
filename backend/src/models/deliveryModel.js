import { Schema, model } from "mongoose";

const deliverySchema = new Schema(
  {
    delivery: {
      date: { type: Date, required: true, default: Date.now },
      time: { type: String, required: true }, // TODO Extract time from full datetime.
      zone: { type: Schema.Types.ObjectId, ref: "Zone" },
      customer: { type: Schema.Types.ObjectId, ref: "Customer" },
      status: {
        type: String,
        enum: ["picked", "ontheway", "delivered", "delayed", "cancelled", "returned"],
        required: true,
        default: "picked",
      },
      orderBag: [{ item: { type: Schema.Types.ObjectId, ref: "OrderBag" } }],
      paymentTransactionID: [{ item: { type: Schema.Types.ObjectId, ref: "CustomerPayment" } }],
    },
  },
  { timestamps: true }
);

export const Delivery = model("Delivery", deliverySchema);

/* -----------------------------------------------------------------/
                    ** Delivery
                   dateTime, status, itemOrderID, orderBag, paymentTransactionID, zone, customer
/------------------------------------------------------------------*/
