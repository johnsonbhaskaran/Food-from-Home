import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({});

export const Customer = mongoose.model("Customer", customerSchema);

/* -----------------------------------------------------------------/
                    ** CUSTOMER
                   fullname, profileImage, address [shipping, billing], location, zone, phone, email, password, orderHistory, paymentHisory, chatHistory, favouriteFoodlist, bagList, paymentMode [UPI, Credit, COD]
/------------------------------------------------------------------*/
