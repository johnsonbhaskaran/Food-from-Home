import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({});

export const Chat = mongoose.model("Chat", chatSchema);

/* -----------------------------------------------------------------/
                    ** Chat
                   customerChat [messageSent, dateTime, readStatus, storeID, orderID]
                   chefChat [messageSent, dateTime, readStatus, customerID, orderID]
/------------------------------------------------------------------*/
