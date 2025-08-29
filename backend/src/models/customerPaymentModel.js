import mongoose from "mongoose";

const customerPaymentSchema = new mongoose.Schema(
  {
    payment: {
      date: { type: Date, required: true, default: Date.now },
      time: { type: String, required: true }, // Extract time from full datetime.
      status: {
        type: String,
        enum: ["processing", "pending", "cancelled", "completed", "scheduled"],
        required: true,
        default: "processing",
      },
      amount: { type: Number, required: true, default: 0 },
      transactionID: { type: String, required: true, default: "" },
      orderID: { type: mongoose.Schema.Types.ObjectId, ref: "OrderBag" },
    },
  },
  { timestamps: true }
);

export const CustomerPayment = mongoose.model("CustomerPayment", customerPaymentSchema);

/* -----------------------------------------------------------------/
                    ** CustomerPayment
                   date, type, status, amount, transactionID, orderID
/------------------------------------------------------------------*/
