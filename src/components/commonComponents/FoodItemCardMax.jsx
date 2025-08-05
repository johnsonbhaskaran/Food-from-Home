import FeatherIcon from "feather-icons-react";
import BtnGradientFilled from "./BtnGradientFilled";
import BtnTransparent from "./BtnTransparent";
import { useState } from "react";
import PillBtn from "./PillBtn";

const FoodItemCardMax = ({ imgSrc, price, action, itemName, timeDuration, tags }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavs = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className='group relative shadow-lg mx-auto md:mx-4 mt-6 rounded-[20px] w-fit h-fit overflow-hidden select-none'>
      <img
        src={imgSrc}
        alt=''
        className='group-hover:scale-105 transition-transform duration-400'
      />
      <div className='absolute inset-0 flex flex-col justify-between items-end bg-gradient-to-t from-0% from-black/100 via-30% via-black/60 to-transparent'>
        {/* Favorite toggle Icon */}
        <div className='mt-4 mr-4'>
          <div
            onClick={() => toggleFavs()}
            className='p-2 border-2 border-brand-primary rounded-full cursor-pointer'
          >
            {isFavorite ? (
              <FeatherIcon icon='heart' className='text-brand-primary' fill='currentColor' />
            ) : (
              <FeatherIcon icon='heart' className='text-brand-primary' />
            )}
          </div>
        </div>
        {/* Card Bottom text info & actions */}
        <div className='p-4 w-full'>
          <div className='flex justify-between items-center text-white'>
            <h3 className='my-4 font-extrabold text-3xl'>{itemName}</h3>
            <div className='flex justify-between items-center text-white'>
              <FeatherIcon icon='clock' size='14' />
              <p className='ml-1 text-sm'>{timeDuration}</p>
            </div>
          </div>
          {/* Tags */}
          <PillBtn tags={tags} />
          <div className='flex justify-between'>
            <BtnTransparent text={price} />
            <BtnGradientFilled value={action} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FoodItemCardMax;
