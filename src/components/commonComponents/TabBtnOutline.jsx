const TabBtnOutline = ({ title, chefName, orderID }) => {
  return (
    <button className='flex flex-col gap-2 p-3 border border-brand-text-dark rounded-xl rounded-b-none w-1/2'>
      <div className='font-bold text-left'>{title}</div>
      <div className='text-xs text-left'>{chefName || orderID}</div>
    </button>
  );
};
export default TabBtnOutline;
