import todaySpecialCircularFoodImg1 from "../../assets/today-special-circular-food-img-1.png";
import todaySpecialCircularFoodImg2 from "../../assets/today-special-circular-food-img-2.png";
import todaySpecialCircularFoodImg3 from "../../assets/today-special-circular-food-img-3.png";

const HorizontalScrollCircularImage = () => {
  return (
    <div className='flex gap-x-4'>
      <img src={todaySpecialCircularFoodImg1} alt='' />
      <img src={todaySpecialCircularFoodImg2} alt='' />
      <img src={todaySpecialCircularFoodImg3} alt='' />
    </div>
  );
};
export default HorizontalScrollCircularImage;
