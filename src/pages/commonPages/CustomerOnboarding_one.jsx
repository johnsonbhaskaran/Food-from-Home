import { Link } from "react-router-dom";
import OnboardingImageOne_dark from "../../assets/Onboarding-dark-img-1.png";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import CarouselIndicators from "../../components/commonComponents/CarouselIndicators";

const CustomerOnboarding_one = () => {
  const Onboarding_screen = 1;

  return (
    <div className='flex flex-col justify-center min-h-screen text-brand-text-light text-center'>
      {/* Sub Title */}
      <div className='my-16'>
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary font-bold text-transparent text-3xl'>
          <span className='block font-extralight text-brand-text-light text-lg tracking-wide'>
            Welcome to
          </span>
          FOOD from HOME
        </h2>
      </div>
      {/* Onboarding Image 1 */}
      <div className='mb-16 px-6'>
        <img
          className='mx-auto max-h-80 object-cover'
          src={OnboardingImageOne_dark}
          alt='Onboarding image one'
        />
      </div>
      {/* Title and Description */}
      <div className='mb-12'>
        <h1 className='font-bold text-4xl'>Select Location</h1>
        <p className='px-20 py-2 text-sm tracking-wide'>
          Select your location, you can use your PIN code or give access to GPS and locate yourself
        </p>
      </div>
      {/* Next button */}
      <Link to='/onboarding/2' className='mb-16'>
        <BtnTransparent text={"Next"} />
      </Link>
      {/* Carousel Indicators */}
      <div className='mx-auto mb-4'>
        <CarouselIndicators Onboarding_screen={Onboarding_screen} />
      </div>
    </div>
  );
};
export default CustomerOnboarding_one;
