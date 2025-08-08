import FeatherIcon from "feather-icons-react";
import ToggleSwitch from "./ToggleSwitch";

const ThemeSelectionBtn = () => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark'>
      <div className='text-left grow'>Dark Theme</div>
      <ToggleSwitch isDark={true} />
    </button>
  );
};
export default ThemeSelectionBtn;
