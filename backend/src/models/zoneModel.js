import mongoose from "mongoose";

const zoneSchema = new mongoose.Schema({});

export const Zone = mongoose.model("Zone", zoneSchema);

/* -----------------------------------------------------------------/
                    ** Zone
                   name [location [lat, long], address [line1, line2, city, state, PIN], DIGIPIN, plusCodes, what3words, zoneCode]
/------------------------------------------------------------------*/
