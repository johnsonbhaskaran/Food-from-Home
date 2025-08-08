import FeatherIcon from "feather-icons-react";

const TabBtnFilled = ({ title, orders, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='relative flex justify-between items-center gap-2 bg-brand-fore-dark p-4 rounded-xl w-1/2'
    >
      <div className='space-y-1'>
        <div className='font-bold text-left'>{title}</div>
        <div className='text-xs text-left'>Live Orders ({orders})</div>
      </div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default TabBtnFilled;
