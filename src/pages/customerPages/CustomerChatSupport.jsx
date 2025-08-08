import { useState } from "react";
import TabBtnFilled from "../../components/commonComponents/TabBtnFilled";
import TabBtnOutline from "../../components/commonComponents/TabBtnOutline";
import NotificationOutlineBtn from "../../components/commonComponents/NotificationOutlineBtn";

const CustomerChatSupport = () => {
  const [show, setShow] = useState(false);

  const orderDetails = {
    order_1: {
      orderNo: "00123",
      chefName: "Johnson",
    },
    order_2: {
      orderNo: "00106",
      chefName: "Samir Pawar",
    },
  };

  return (
    <div className='relative flex flex-col mx-auto px-4 md:max-w-3xl h-dvh container'>
      {/* Title */}
      <div className='mt-14 mb-10'>
        <h1 className='font-bold text-3xl text-center'>Chat with Chef</h1>
      </div>

      {/* Select live order Tab Bar */}
      <div className='flex justify-between gap-1 pb-1 border-b border-brand-text-dark'>
        <TabBtnOutline
          title={"Chatting with"}
          chefName={`Chef ${orderDetails.order_2.chefName} (# ${orderDetails.order_2.orderNo})`}
        />
        <TabBtnFilled
          onClick={() => setShow(!show)}
          title={"Select Order"}
          orders={2}
        ></TabBtnFilled>
      </div>

      {/* Dropdown - Live Order selection */}
      {!!show && (
        <div className='flex flex-col gap-2 bg-brand-fore-dark ms-auto p-2 border border-t-0 border-brand-text-dark rounded-lg rounded-t-none w-xs'>
          <NotificationOutlineBtn
            title={"Order ID# 00106"}
            dotInfo={"on the way"}
            chevron={"chevron-right"}
          />
          <NotificationOutlineBtn
            title={"Order ID# 00123"}
            dotInfo={"perparing"}
            chevron={"chevron-right"}
          />
        </div>
      )}
    </div>
  );
};
export default CustomerChatSupport;
