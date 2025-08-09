import FeatherIcon from "feather-icons-react";

const DropdownTextBtn = ({ text, chevron }) => {
  return (
    <button
      className={`flex justify-between items-center gap-2  rounded-lg w-full text-xl ${
        chevron === "down" ? "border p-4" : "py-4"
      }`}
    >
      <div className='text-left grow'>{text}</div>
      <FeatherIcon icon={`chevron-${chevron}`} />
    </button>
  );
};
export default DropdownTextBtn;
