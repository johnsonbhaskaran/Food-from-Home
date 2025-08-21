import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import IndicatorDotBrandColor from "./IndicatorDotBrandColor";
import { Link } from "react-router-dom";

const CustomerNavBar = ({ active }) => {
  const [navBarActive, setNavBarActive] = useState(1);

  useEffect(() => {
    setNavBarActive(active);
  }, [active]);

  const clickHandle = (active) => {
    setNavBarActive(active);
  };

  return (
    <div className='right-0 bottom-0 left-0 z-50 fixed flex items-center gap-x-3 bg-brand-fore-dark shadow-lg mx-auto mb-2 sm:mb-4 md:mb-6 p-4 rounded-4xl max-w-md md:max-w-lg'>
      <Link
        to='/home-customer'
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("home")}
      >
        <FeatherIcon
          icon='home'
          className={navBarActive === "home" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark `}
        />
        <p className='font-bold text-xs'>Home</p>
      </Link>
      <Link
        to='/chat-customer'
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("chat")}
      >
        <FeatherIcon
          icon='message-square'
          className={navBarActive === "chat" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Chat</p>
      </Link>
      <Link
        to='/favorites'
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("favorites")}
      >
        <FeatherIcon
          icon='heart'
          className={
            navBarActive === "favorites" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`
          }
        />
        <p className='font-bold text-xs'>Favorites</p>
      </Link>
      <Link
        to='/bag'
        className='relative flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle("bag")}
      >
        <IndicatorDotBrandColor value={3} />
        <FeatherIcon
          icon='shopping-bag'
          className={navBarActive === "bag" && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Bag</p>
      </Link>
      <Link
        to='/settings-customer'
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
      </Link>
    </div>
  );
};
export default CustomerNavBar;
