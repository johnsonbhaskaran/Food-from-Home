import mongoose from "mongoose";

const chefPayoutSchema = new mongoose.Schema(
  {
    payout: {
      date: { type: Date, required: true, default: Date.now },
      type: String,
      status: {
        type: String,
        enum: ["processing", "pending", "cancelled", "completed", "scheduled"],
        required: true,
        default: "processing",
      },
      amount: Number,
      transactionID: String,
      orderID: { type: mongoose.Schema.Types.ObjectId, ref: "orderBag" },
    },
  },
  { timestamps: true }
);

export const ChefPayout = mongoose.model("ChefPayout", chefPayoutSchema);

/* -----------------------------------------------------------------/
                    ** ChefPayout
                   date, type, status, amount, transactionID, orderID
/------------------------------------------------------------------*/
