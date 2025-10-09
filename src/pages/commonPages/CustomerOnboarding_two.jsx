import { Link } from "react-router-dom";
import OnboardingImage_dark from "../../assets/Onboarding-dark-img-2.png";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import CarouselIndicators from "../../components/commonComponents/CarouselIndicators";

const CustomerOnboarding_two = () => {
  const Onboarding_screen = 2;

  return (
    <div className='flex flex-col justify-center min-h-screen text-brand-text-light text-center'>
      {/* Sub Title */}
      <div className='my-16'>
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary font-bold text-transparent text-3xl'>
          <span className='block font-extralight text-brand-text-light text-lg tracking-wide'>
            There are
          </span>
          700+ Chefs Pan India
        </h2>
      </div>
      {/* Onboarding Image 1 */}
      <div className='mx-auto mb-16 px-6'>
        <img
          className='max-h-80 object-cover'
          src={OnboardingImage_dark}
          alt='Onboarding image one'
        />
      </div>
      {/* Title and Description */}
      <div className='mb-12'>
        <h1 className='font-bold text-4xl'>Select nearby Chefs</h1>
        <p className='px-16 py-2 text-sm tracking-wide'>
          Find out our curated and cherry picked Chefs around you. So now you have access to home
          made food within minutes reach.
        </p>
      </div>
      {/* Next button */}
      <Link to='/onboarding/3' className='mb-16'>
        <BtnTransparent text={"Next"} />
      </Link>
      {/* Carousel Indicators */}
      <div className='mx-auto mb-4'>
        <CarouselIndicators Onboarding_screen={Onboarding_screen} />
      </div>
    </div>
  );
};
export default CustomerOnboarding_two;
