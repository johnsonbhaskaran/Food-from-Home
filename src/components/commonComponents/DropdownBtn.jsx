import FeatherIcon from "feather-icons-react";

const DropdownBtn = ({ text }) => {
  return (
    <button className='flex justify-between items-center gap-2 bg-brand-fore-dark px-5 py-4 rounded-lg w-full'>
      <div className='text-left grow'>{text}</div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default DropdownBtn;
