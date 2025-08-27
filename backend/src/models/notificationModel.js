import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({});

export const Notification = mongoose.model("Notification", notificationSchema);

/* -----------------------------------------------------------------/
                    ** Notification
                    notifyCustomer [orderStatus, chefChat, orderID, offers]
                   notifyChef [payout, deliveryStatus, customerChat, storeID]
/------------------------------------------------------------------*/
