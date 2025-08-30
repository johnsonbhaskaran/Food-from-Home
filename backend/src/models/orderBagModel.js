import mongoose, { Schema } from "mongoose";

const orderBagSchema = new mongoose.Schema(
  {
    order: {
      _id: String,
      items: [
        {
          item: [
            { store: { type: Schema.Types.ObjectId, ref: "ChefStore" } },
            {
              foodItem: { type: Schema.Types.ObjectId, ref: "FoodItem", required: true },
              quantity: { type: Number, required: true, min: 0, default: 1 },
              instruction: {
                type: String,
                required: true,
                default: "no instruction",
                maxlength: 20,
              },
            },
          ],
          customer: { type: Schema.Types.ObjectId, ref: "Customer" },
          orderTime: { type: Date, required: true }, // TODO Buy Now (onClick) => Date.now
          totalPrice: { type: Number, required: true, default: 0 },
        },
      ],
    },
  },
  { timestamps: true }
);

export const OrderBag = mongoose.model("OrderBag", orderBagSchema);

/* -----------------------------------------------------------------/
                    ** OrderBag
                   storeID, foodItemID, quantity, instruction, orderTime, totalPrice, orderBagID, customer
/------------------------------------------------------------------*/
