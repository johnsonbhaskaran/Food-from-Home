import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
  {
    userAuthId: { type: mongoose.Schema.Types.ObjectId, ref: "UserAuth" },
    phone: Number,
    profileImage: String,
    address: {
      shipping: {
        line1: {
          type: String,
        },
        line2: {
          type: String,
        },
        city: String,
        state: String,
        pincode: Number,
      },
      billing: {
        line1: {
          type: String,
        },
        line2: {
          type: String,
        },
        city: String,
        state: String,
        pincode: Number,
      },
    },
    location: {
      zone: Number, // * Pincode
      latitude: Number,
      longitude: Number,
      DIGIPIN: String,
      plusCodes: String,
    },
    specialty: String,
    preferedPaymentMode: { type: String, enum: ["upi", "credit", "cod"], default: "upi" },
    orderHistory: [{ item: { type: Schema.Types.ObjectId, ref: "OrderBag" } }],
    paymentHistory: [{ item: { type: Schema.Types.ObjectId, ref: "CustomerPayment" } }],
    chatHistory: [{ item: { type: Schema.Types.ObjectId, ref: "Chat" } }],
    favouriteFoodList: [{ item: { type: Schema.Types.ObjectId, ref: "FoodItem" } }],
    bagList: [{ item: { type: Schema.Types.ObjectId, ref: "FoodItem" } }],
  },
  { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);

/* -----------------------------------------------------------------/
                    ** CUSTOMER
                   firstname, lastname, profileImage, address [shipping, billing], location, zone, phone, email, password, orderHistory, paymentHisory, chatHistory, favouriteFoodlist, bagList, paymentMode [UPI, Credit, COD]
/------------------------------------------------------------------*/
