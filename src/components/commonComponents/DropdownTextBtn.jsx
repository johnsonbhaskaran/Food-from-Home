import FeatherIcon from "feather-icons-react";

const DropdownTextBtn = ({ text, chevron }) => {
  return (
    <button className='flex justify-between items-center gap-2 py-4 rounded-lg w-full text-xl'>
      <div className='text-left grow'>{text}</div>
      <FeatherIcon icon={`chevron-${chevron}`} />
    </button>
  );
};
export default DropdownTextBtn;
