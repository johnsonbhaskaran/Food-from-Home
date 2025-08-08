import FeatherIcon from "feather-icons-react";

const NotificationOutlineBtn = ({ title, dotInfo }) => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 border border-brand-text-dark rounded-lg w-auto'>
      <div className='text-left grow'>{title}</div>
      <div className='flex flex-none justify-center items-center px-1.5 rounded-full bg-brand-text-light text-brand-fore-light text-xs'>
        {dotInfo}
      </div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default NotificationOutlineBtn;
