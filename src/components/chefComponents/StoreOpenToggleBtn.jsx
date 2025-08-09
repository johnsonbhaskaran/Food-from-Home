import ToggleSwitch from "../commonComponents/ToggleSwitch";

const StoreOpenToggleBtn = () => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark'>
      <div className='text-left grow'>Store Open Now</div>
      <ToggleSwitch isOpen={true} />
    </button>
  );
};
export default StoreOpenToggleBtn;
