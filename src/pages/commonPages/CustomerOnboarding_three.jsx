import OnboardingImage_dark from "../../assets/Onboarding-dark-img-3.png";
import BtnGradientBorder from "../../components/commonComponents/BtnGradientBorder";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import CarouselIndicators from "../../components/commonComponents/CarouselIndicators";

const CustomerOnboarding_three = () => {
  const Onboarding_screen = 3;

  return (
    <div className='flex flex-col justify-center min-h-screen text-brand-text-light text-center'>
      {/* Sub Title */}
      <div className='my-16'>
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-[#4A00E0] from-13% to-[#C141D8] to-70% font-bold text-transparent text-3xl'>
          <span className='block font-extralight text-brand-text-light text-lg tracking-wide'>
            Plentiful choices
          </span>
          more than 130+ varieties
        </h2>
      </div>
      {/* Onboarding Image 1 */}
      <div className='mb-16 px-6'>
        <img
          className='mx-auto max-h-80 object-cover'
          src={OnboardingImage_dark}
          alt='Onboarding image one'
        />
      </div>
      {/* Title and Description */}
      <div className='mb-12'>
        <h1 className='font-bold text-brand-text-light text-4xl'>Order your Food</h1>
        <p className='px-20 py-2 text-sm tracking-wide'>
          Once preparation is done from our home chef’s Your food will reach your door step in the
          next 10 mins
        </p>
      </div>
      {/* Next button */}
      <div className='flex space-x-4 mx-auto mb-16'>
        <BtnGradientBorder value={"Sign in"} />
        <BtnGradientBorder value={"Sign up"} />
      </div>
      {/* Carousel Indicators */}
      <div className='mx-auto mb-4'>
        <CarouselIndicators Onboarding_screen={Onboarding_screen} />
      </div>
    </div>
  );
};
export default CustomerOnboarding_three;
