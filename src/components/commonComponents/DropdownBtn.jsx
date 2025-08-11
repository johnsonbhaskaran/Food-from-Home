import FeatherIcon from "feather-icons-react";

const DropdownBtn = ({ text, btnSize, chevron, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-between items-center gap-2 bg-brand-fore-dark px-5 py-4 rounded-lg ${btnSize}`}
    >
      <div className='text-lg text-left grow'>{text}</div>
      <FeatherIcon icon={`chevron-${chevron}`} />
    </button>
  );
};
export default DropdownBtn;
