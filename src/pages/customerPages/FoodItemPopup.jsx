import FeatherIcon from "feather-icons-react";
import FoodItemCardMax from "../../components/commonComponents/FoodItemCardMax";
import FoodItemCardMini from "../../components/commonComponents/FoodItemCardMini";
import FoodItemImageMax_1 from "../../assets/Food-img-1-max.png";
import FoodItemImageMini_1 from "../../assets/Food-img-1-mini.png";
import FoodItemImageMini_2 from "../../assets/Food-img-2-mini.png";
import FoodItemImageMini_3 from "../../assets/Food-img-3-mini.png";

const FoodItemPopup = () => {
  return (
    <div className='inset-0 m-4 md:mx-auto pb-8 rounded-xl md:max-w-3xl overflow-hidden'>
      {/* Close button */}
      <div className='relative bg-brand-fore-dark/50 h-8'>
        <div className='right-0 absolute'>
          <FeatherIcon
            icon='x'
            color='currentColor'
            className='m-2 p-1 border border-b-brand-text-dark rounded-full size-8'
          />
        </div>
      </div>
      {/* Selected Food Item card */}
      <div className='flex justify-center bg-brand-fore-dark/50 p-4'>
        <FoodItemCardMax
          imgSrc={FoodItemImageMax_1}
          price={"₹ 150 / pcs"}
          action={"Add now"}
          itemName={"Fish Fry"}
          timeDuration={"25-35 min"}
          tags={{ one: "fish", two: "marine", three: "exotic", four: "diet", five: "side dish" }}
        ></FoodItemCardMax>
      </div>

      {/* Often bought with other food items - Suggestions */}
      <div className='bg-brand-fore-dark/50 p-4 rounded-b-xl'>
        <h2 className='text-base'>Often bought with</h2>
        <div className='gap-4 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 mx-auto mt-4'>
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
        </div>
      </div>
      {/* Hack */}
      <div className='bg-brand-bg-dark py-12'></div>
    </div>
  );
};
export default FoodItemPopup;
