import ChefProfilePicMedium from "../../assets/store-chef-profile-pic-80px.png";
import ChefProfileBannerMobile from "../../assets/store-chef-profile-banner-mobile.png";
import HorizontalScrollCircularImage from "../../components/commonComponents/HorizontalScrollCircularImage";
import HorizontalScrollTextLink from "../../components/commonComponents/HorizontalScrollTextLink";

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
      <div className='bg-brand-fore-dark mx-4 mt-3 p-4 pr-0 rounded-xl text-center'>
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary mb-4 font-bold text-transparent text-xl sm:text-2xl'>
          Today's special
        </h2>
        <div className='scrollbar-hidden overflow-x-auto'>
          <HorizontalScrollCircularImage />
        </div>
      </div>
      {/* Category selection horizontal scroll text links */}
      <div className='scrollbar-hidden bg-brand-fore-dark mx-4 mt-3 p-4 rounded-xl overflow-x-auto'>
        <HorizontalScrollTextLink />
      </div>
      {/* Filter & Sort */}
      <div className='mx-4 mt-3'></div>
    </div>
  );
};
export default ChefStore;
