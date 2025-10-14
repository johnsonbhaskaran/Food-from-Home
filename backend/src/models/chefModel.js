import mongoose from "mongoose";

const chefSchema = new mongoose.Schema(
  {
    userAuthId: { type: mongoose.Schema.Types.ObjectId, ref: "UserAuth" },
    phone: Number,
    profileImage: String,
    storeID: { type: mongoose.Schema.Types.ObjectId, ref: "ChefStore" },
    specialty: String,
  },
  { timestamps: true }
);

export const Chef = mongoose.model("Chef", chefSchema);

/* -----------------------------------------------------------------/
                    ** CHEF
                   firstname, lastname, password, email, phone, profileImage, store, speciality
/------------------------------------------------------------------*/
