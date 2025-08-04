import ChefProfilePicMedium from "../../assets/store-chef-profile-pic-80px.png";
import ChefProfileBannerMobile from "../../assets/store-chef-profile-banner-mobile.png";
import HorizontalScrollCircularImage from "../../components/commonComponents/HorizontalScrollCircularImage";

const ChefStore = () => {
  return (
    <div className='flex flex-col gap-x-6'>
      <div
        style={{ backgroundImage: { ChefProfileBannerMobile } }}
        className='relative bg-cover bg-center w-full h-56'
      >
        <div className='flex justify-between items-end mx-4 md:mx-auto p-4 h-full i md:container'>
          <img src={ChefProfilePicMedium} alt='' />
          <h1 className='font-semibold text-2xl underline underline-offset-2'>Revathy’s Kitchen</h1>
        </div>
      </div>
      {/* Today's special */}
      <div className='mx-4 p-4'>
        <h2>Today's special</h2>
        <HorizontalScrollCircularImage />
      </div>
    </div>
  );
};
export default ChefStore;
