import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";
import IndicatorDotBrandColor from "./IndicatorDotBrandColor";

const ChefNavBar = ({ active }) => {
  const [navBarActive, setNavBarActive] = useState(1);

  useEffect(() => {
    setNavBarActive(active);
  }, [active]);

  const clickHandle = (active) => {
    setNavBarActive(active);
  };

  return (
    <div className='right-0 bottom-0 left-0 fixed flex items-center gap-x-3 bg-brand-fore-dark shadow-lg mx-auto mb-4 md:mb-6 px-4 py-6 rounded-4xl max-w-md md:max-w-lg'>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle(1)}
      >
        <FeatherIcon
          icon='home'
          className={navBarActive === 1 && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Home</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle(2)}
      >
        <FeatherIcon
          icon='message-square'
          className={navBarActive === 2 && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Chat</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle(3)}
      >
        <FeatherIcon
          icon='heart'
          className={navBarActive === 3 && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Favorites</p>
      </div>
      <div
        className='relative flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle(4)}
      >
        <IndicatorDotBrandColor value={3} />
        <FeatherIcon
          icon='shopping-bag'
          className={navBarActive === 4 && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Bag</p>
      </div>
      <div
        className='flex flex-col items-center gap-y-1 px-1 w-full'
        onClick={() => clickHandle(5)}
      >
        <FeatherIcon
          icon='menu'
          className={navBarActive === 5 && `py-1 rounded-4xl w-full h-8 bg-brand-text-dark`}
        />
        <p className='font-bold text-xs'>Settings</p>
      </div>
    </div>
  );
};
export default ChefNavBar;
