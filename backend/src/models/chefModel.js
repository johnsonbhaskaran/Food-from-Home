import mongoose from "mongoose";
import { ChefStore } from "./chefStoreModel";

const chefSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  profileImage: String,
  storeID: { type: mongoose.Schema.Types.ObjectId, ref: "ChefStore" },
  specialty: String,
});

export const Chef = mongoose.model("Chef", chefSchema);

/* -----------------------------------------------------------------/
                    ** CHEF
                   firstname, lastname, password, email, phone, profileImage, store, speciality
/------------------------------------------------------------------*/
