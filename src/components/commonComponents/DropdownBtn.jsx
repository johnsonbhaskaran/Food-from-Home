import FeatherIcon from "feather-icons-react";

const DropdownBtn = ({ text, btnSize }) => {
  return (
    <button
      className={`flex justify-between items-center gap-2 bg-brand-fore-dark px-5 py-4 rounded-lg ${btnSize}`}
    >
      <div className='flex-none'>{text}</div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default DropdownBtn;
