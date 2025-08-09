const StoreOpenToggleBtn = () => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark'>
      <div className='text-left grow'>Store open now</div>
      <ToggleSwitch isDark={true} />
    </button>
  );
};
export default StoreOpenToggleBtn;
