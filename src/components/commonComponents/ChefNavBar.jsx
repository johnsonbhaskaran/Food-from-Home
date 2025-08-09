import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import IndicatorDotBrandColor from "./IndicatorDotBrandColor";

const ChefNavBar = ({ active }) => {
  const [navBarActive, setNavBarActive] = useState(active);

  useEffect(() => {
    setNavBarActive(active);
  }, [active]);

  const clickHandle = (active) => {
    setNavBarActive(active);
  };

  return (
    <div className='right-0 bottom-0 left-0 z-50 fixed flex items-center gap-x-3 bg-brand-fore-dark shadow-lg mx-auto mb-2 sm:mb-4 md:mb-6 p-4 rounded-4xl max-w-md md:max-w-lg'>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("chat")}
      >
        <FeatherIcon
          icon='message-square'
          className={navBarActive === "chat" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Chat</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("availability")}
      >
        <FeatherIcon
          icon='plus-square'
          className={
            navBarActive === "availability" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`
          }
        />
        <p className='font-bold text-xs'>Availability</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("orders")}
      >
        <FeatherIcon
          icon='box'
          className={navBarActive === "orders" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Orders</p>
      </div>
      <div
        className='relative flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("payout")}
      >
        <IndicatorDotBrandColor value={3} />
        <FeatherIcon
          icon='briefcase'
          className={navBarActive === "payout" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Payout</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("settings")}
      >
        <FeatherIcon
          icon='menu'
          className={
            navBarActive === "settings" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`
          }
        />
        <p className='font-bold text-xs'>Settings</p>
      </div>
    </div>
  );
};
export default ChefNavBar;
