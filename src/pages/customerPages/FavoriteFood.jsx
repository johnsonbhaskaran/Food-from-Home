import FoodItemCardMini from "../../components/commonComponents/FoodItemCardMini";
import FoodItemImageMini_1 from "../../assets/Food-img-1-mini.png";
import FoodItemImageMini_2 from "../../assets/Food-img-2-mini.png";
import FoodItemImageMini_3 from "../../assets/Food-img-3-mini.png";
import BtnGradientFilled from "../../components/commonComponents/BtnGradientFilled";

const FavoriteFood = () => {
  return (
    <div className='mx-auto px-4 md:max-w-3xl container'>
      <div className='mt-14'>
        <h1 className='font-bold text-3xl text-center'>Your Favorites</h1>
      </div>
      <div className='gap-4 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mx-auto mt-6'>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_1} />
        </div>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_2} />
        </div>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_3} />
        </div>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_1} />
        </div>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_2} />
        </div>
        <div className='flex justify-center'>
          <FoodItemCardMini imgSrc={FoodItemImageMini_3} />
        </div>
      </div>

      <div className='right-0 bottom-26 md:bottom-30 fixed flex justify-center items-end w-full h-full'>
        <BtnGradientFilled value={"Explore more"} />
      </div>
    </div>
  );
};
export default FavoriteFood;
