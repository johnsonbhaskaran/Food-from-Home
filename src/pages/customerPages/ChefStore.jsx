import ChefProfilePicMedium from "../../assets/store-chef-profile-pic-80px.png";
import ChefProfileBannerMobile from "../../assets/store-chef-profile-banner-mobile.png";
import HorizontalScrollCircularImage from "../../components/commonComponents/HorizontalScrollCircularImage";
import HorizontalScrollTextLink from "../../components/commonComponents/HorizontalScrollTextLink";
import BtnTransparentWithIcon from "../../components/commonComponents/BtnTransparentWithIcon";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import FoodItemCardMax from "../../components/commonComponents/FoodItemCardMax";
// Food Item Images - Max
import FoodItemImageMax_1 from "../../assets/Food-img-1-max.png";
import FoodItemImageMax_2 from "../../assets/Food-img-2-max.png";
import FoodItemImageMax_3 from "../../assets/Food-img-3-max.png";

const ChefStore = () => {
  return (
    <div className='flex flex-col md:mx-auto md:container'>
      {/* Store Banner section */}
      <div
        style={{ backgroundImage: { ChefProfileBannerMobile } }}
        className='bg-cover bg-center w-full h-56'
      >
        <div className='flex justify-between items-end mx-4 md:mx-auto p-4 h-full i md:container'>
          <img src={ChefProfilePicMedium} alt='' />
          <h1 className='font-semibold text-white text-2xl underline underline-offset-2'>
            Revathy’s Kitchen
          </h1>
        </div>
      </div>
      {/* Today's special */}
      <div className='bg-brand-fore-dark mx-4 mt-4 p-4 pr-0 rounded-xl text-center'>
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary mb-4 font-bold text-transparent text-xl sm:text-2xl'>
          Today's special
        </h2>
        <div className='scrollbar-hidden overflow-x-auto'>
          <HorizontalScrollCircularImage />
        </div>
      </div>
      {/* Category selection horizontal scroll text links */}
      <div className='scrollbar-hidden bg-brand-fore-dark mx-4 mt-6 p-4 rounded-xl overflow-x-auto'>
        <HorizontalScrollTextLink />
      </div>
      {/* Filter & Sort */}
      <div className='flex justify-between mx-4 mt-6'>
        <BtnTransparentWithIcon text={"Filter"} />
        <BtnTransparentWithIcon text={"Sort"} />
      </div>
      {/* Food item card */}
      <div className='mx-4 mt-6'>
        <FoodItemCardMax imgSrc={FoodItemImageMax_1} text={"text"}>
          <h3 className='font-extrabold text-white text-3xl'>Fish Fry</h3>
          <div className='flex justify-between'>
            <BtnTransparent text={"₹ 150 / pcs"} />
            <BtnTransparent text={"₹ 150 / pcs"} />
          </div>
        </FoodItemCardMax>
        <FoodItemCardMax imgSrc={FoodItemImageMax_2}>
          <h3>Kebab</h3>
        </FoodItemCardMax>
        <FoodItemCardMax imgSrc={FoodItemImageMax_3}>
          <h3>Potato Fries</h3>
        </FoodItemCardMax>
      </div>
      {/* Other popular Chef's nearby */}
      <div className='flex mx-4 mt-6'>
        <img src={ChefProfilePicMedium} alt='' />
        <img src={ChefProfilePicMedium} alt='' />
        <img src={ChefProfilePicMedium} alt='' />
        <img src={ChefProfilePicMedium} alt='' />
      </div>
    </div>
  );
};
export default ChefStore;
