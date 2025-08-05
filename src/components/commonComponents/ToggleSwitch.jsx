import { useState } from "react";

const ToggleSwitch = ({ isDark }) => {
  const [enabled, setEnabled] = useState(isDark);

  const handleToggle = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <div
      onClick={() => handleToggle()}
      className='flex items-center gap-x-1 p-0.5 rounded-full w-12 h-6 bg-brand-text-light cursor-pointer'
    >
      <div className={`rounded-full size-5 bg-brand-text-dark ${enabled && "ms-6"}`} />
    </div>
  );
};
export default ToggleSwitch;
