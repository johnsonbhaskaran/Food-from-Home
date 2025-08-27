import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({});

export const Chat = mongoose.model("Chat", chatSchema);

/* -----------------------------------------------------------------/
                    ** Chat
                   customer [messageSent, dateTime, readStatus, storeID, orderID]
                   chef [messageSent, dateTime, readStatus, customerID, orderID]
/------------------------------------------------------------------*/
