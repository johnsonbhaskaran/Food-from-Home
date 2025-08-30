import { Schema, model } from "mongoose";

const zoneSchema = new Schema(
  {
    zone: [
      {
        PIN: {
          type: [Number],
          required: true,
          validate: {
            validator: function (v) {
              return v.every((p) => /^[0-9]{6}$/.test(p.toString()));
            },
          },
        },
        city: { type: String, required: true },
        state: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Zone = model("Zone", zoneSchema);

/* -----------------------------------------------------------------/
                    ** Zone
                   city, state, PIN
/------------------------------------------------------------------*/
