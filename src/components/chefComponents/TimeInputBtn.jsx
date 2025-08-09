import FeatherIcon from "feather-icons-react";

const TimeInputBtn = ({ text }) => {
  return (
    <button className='flex justify-between items-center gap-2 bg-brand-fore-dark px-5 py-4 rounded-lg w-full'>
      <div className='text-brand-text-dark text-left grow'>{text}</div>
      <div className='text-sm text-right'>.Minutes</div>
    </button>
  );
};
export default TimeInputBtn;
