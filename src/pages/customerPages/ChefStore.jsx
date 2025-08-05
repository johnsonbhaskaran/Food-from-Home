import ChefProfilePicMedium from "../../assets/store-chef-profile-pic-80px.png";
import OtherChefPic_1 from "../../assets/other-Chef-1-img.png";
import OtherChefPic_2 from "../../assets/other-Chef-2-img.png";
import OtherChefPic_3 from "../../assets/other-Chef-3-img.png";
import OtherChefPic_4 from "../../assets/other-Chef-4-img.png";
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
    <div className='flex flex-col md:mx-auto md:max-w-7xl'>
      {/* Store Banner section */}
      <div
        style={{ backgroundImage: { ChefProfileBannerMobile } }}
        className='bg-cover bg-center w-full h-56'
      >
        <div className='flex justify-between items-end mx-4 md:mx-auto p-4 md:max-w-4xl h-full'>
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
      <div className='mx-4 md:mx-12 mt-6'>
        <div className='md:flex md:flex-wrap w-full'>
          <FoodItemCardMax
            imgSrc={FoodItemImageMax_1}
            price={"₹ 150 / pcs"}
            action={"Add now"}
            itemName={"Fish Fry"}
            timeDuration={"25-35 min"}
            tags={{ one: "fish", two: "marine", three: "exotic", four: "diet", five: "side dish" }}
          ></FoodItemCardMax>
          <FoodItemCardMax
            imgSrc={FoodItemImageMax_2}
            price={"₹ 150 / pcs"}
            action={"Add now"}
            itemName={"Kebab"}
            timeDuration={"25-35 min"}
            tags={{ one: "meat", two: "juicy", three: "exotic", four: "diet", five: "side dish" }}
          ></FoodItemCardMax>
          <FoodItemCardMax
            imgSrc={FoodItemImageMax_3}
            price={"₹ 150 / pcs"}
            action={"Add now"}
            itemName={"Potato Fries"}
            timeDuration={"25-35 min"}
            tags={{ one: "fries", two: "potato", three: "sauce", four: "hot", five: "crisps" }}
          ></FoodItemCardMax>
          <FoodItemCardMax
            imgSrc={FoodItemImageMax_1}
            price={"₹ 150 / pcs"}
            action={"Add now"}
            itemName={"Fish Fries"}
            timeDuration={"25-35 min"}
            tags={{ one: "fish", two: "marine", three: "exotic", four: "diet", five: "side dish" }}
          ></FoodItemCardMax>
        </div>
      </div>
      {/* Other popular Chef's nearby */}
      <div className='bg-brand-fore-dark mx-4 mt-6 mb-28 px-4 py-2 rounded-xl'>
        <h2 className='text-base'>other popular Chef's nearby</h2>
        <div className='scrollbar-hidden flex gap-x-2 my-2 overflow-x-scroll'>
          <img src={OtherChefPic_1} alt='' className='rounded-lg' />
          <img src={OtherChefPic_2} alt='' className='rounded-lg' />
          <img src={OtherChefPic_3} alt='' className='rounded-lg' />
          <img src={OtherChefPic_4} alt='' className='rounded-lg' />
        </div>
      </div>
    </div>
  );
};
export default ChefStore;
