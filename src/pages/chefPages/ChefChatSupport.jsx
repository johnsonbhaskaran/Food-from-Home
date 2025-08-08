import { useState } from "react";
import TabBtnFilled from "../../components/commonComponents/TabBtnFilled";
import TabBtnOutline from "../../components/commonComponents/TabBtnOutline";
import NotificationOutlineBtn from "../../components/commonComponents/NotificationOutlineBtn";
import ChatInputField from "../../components/commonComponents/ChatInputField";
import ChatBubbleSenderRight from "../../components/commonComponents/ChatBubbleSenderRight";
import ChatBubbleReceiverLeft from "../../components/commonComponents/ChatBubbleReceiverLeft";

const ChefChatSupport = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='relative flex flex-col mx-auto px-4 md:max-w-3xl h-dvh select-none container'>
      {/* Title */}
      <div className='mt-14 mb-10'>
        <h1 className='font-bold text-3xl text-center'>Chat with Customer</h1>
      </div>

      {/* Select live order Tab Bar */}
      <div className='flex justify-between gap-1 pb-1 border-b border-brand-text-dark'>
        <TabBtnOutline title={"Chatting with"} orderID={"ID# 00123"} />
        <TabBtnFilled
          onClick={() => setShow(!show)}
          title={"Select Order#"}
          orders={2}
        ></TabBtnFilled>
      </div>

      {/* Dropdown - Live Order ID# selection */}
      {!!show && (
        <div className='flex flex-col gap-2 bg-brand-fore-dark ms-auto p-2 border border-t-0 border-brand-text-dark rounded-lg rounded-t-none w-xs'>
          <NotificationOutlineBtn
            title={"Order ID# 00106"}
            dotInfo={"10 mins left"}
            chevron={"chevron-right"}
          />
          <NotificationOutlineBtn
            title={"Order ID# 00123"}
            dotInfo={"-5 mins delay"}
            chevron={"chevron-right"}
          />
        </div>
      )}

      <div className='bottom-0 absolute inset-x-0 p-4 w-full'>
        {/* Chat Bubble container */}
        <ChatBubbleReceiverLeft
          title={"ID# 00123 - Johnson"}
          text={"Already past the delivery time. Why late?"}
          time={"03:25"}
        />
        <ChatBubbleSenderRight
          title={""}
          text={
            "Apologies for 5 mins delay in the preparation time. Now the food is ready and it will reach you within 15 mins."
          }
          time={"03:23"}
        />

        {/* Chat Input Field */}
        <ChatInputField />
      </div>
    </div>
  );
};
export default ChefChatSupport;
