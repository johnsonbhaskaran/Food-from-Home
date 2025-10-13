import mongoose, { Schema } from "mongoose";

const userAuthSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isChef: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const UserAuth = mongoose.model("UserAuth", userAuthSchema);

/* -----------------------------------------------------------------/
                    ** USER AUTH
                   username, email, password
/------------------------------------------------------------------*/
