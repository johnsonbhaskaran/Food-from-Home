import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({});

export const Chef = mongoose.model("Chef", chefSchema);

/* -----------------------------------------------------------------/
                    ** CHEF
                   fullname, password, email, phone, profileImage, store, speciality
/------------------------------------------------------------------*/
