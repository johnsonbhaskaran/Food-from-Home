import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema(
  {
    delivery: {
      date: { type: Date, required: true, default: Date.now },
      time: { type: String, required: true }, // Extract time from full datetime.
      status: {
        type: String,
        enum: ["picked", "onTheWay", "delivered", "delayed", "cancelled", "returned"],
        required: true,
        default: "picked",
      },
      orderBag: [{ item: { type: mongoose.Schema.Types.ObjectId, ref: "OrderBag" } }],
      paymentTransactionID: [
        { item: { type: mongoose.Schema.Types.ObjectId, ref: "CustomerPayment" } },
      ],
    },
  },
  { timestamps: true }
);

export const Delivery = mongoose.model("Delivery", deliverySchema);

/* -----------------------------------------------------------------/
                    ** Delivery
                   dateTime, status, itemOrderID, orderBag, paymentTransactionID
/------------------------------------------------------------------*/
