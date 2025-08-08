/*
------------Notifications--------------
*/

import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import NotificationOutlineBtn from "./NotificationOutlineBtn";

const SidebarDropdownBtn = () => {
  const [show, setShow] = useState(false);

  return (
    <button className='flex flex-col'>
      {/* Notifications button */}
      <div
        onClick={() => setShow(!show)}
        className={`flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark ${
          !!show && "rounded-b-none"
        }`}
      >
        <div className='text-left grow'>Notifications</div>
        <div className='flex flex-none justify-center items-center rounded-full size-5 bg-brand-text-light text-brand-fore-light'>
          3
        </div>
        {show ? <FeatherIcon icon='chevron-up' /> : <FeatherIcon icon='chevron-down' />}
      </div>

      {/* Dropdown - Chat & real time order tracking */}
      {!!show && (
        <div className='flex flex-col gap-2 p-2 border border-t-0 border-brand-text-dark rounded-lg rounded-t-none w-xs'>
          <NotificationOutlineBtn title={"Order ID# 00106"} dotInfo={"on the way"} />
          <NotificationOutlineBtn title={"Order ID# 00123"} dotInfo={"perparing"} />
          <NotificationOutlineBtn title={"Chef Chat"} dotInfo={"2"} />
        </div>
      )}
    </button>
  );
};
export default SidebarDropdownBtn;
