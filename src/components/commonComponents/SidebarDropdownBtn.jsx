/*
------------Notifications--------------
*/

import FeatherIcon from "feather-icons-react";

const SidebarDropdownBtn = () => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark'>
      <div className='border text-left grow'>Notifications</div>
      <div className='flex flex-none justify-center items-center rounded-full size-5 bg-brand-text-light text-brand-fore-light'>
        3
      </div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default SidebarDropdownBtn;
