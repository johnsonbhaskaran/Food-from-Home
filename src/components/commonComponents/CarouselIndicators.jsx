const CarouselIndicators = ({ Onboarding_screen }) => {
  const indicator = Onboarding_screen;

  return (
    <div className='flex space-x-1'>
      <div
        className={
          indicator === 1 ? "bg-[#C140D7] rounded-lg size-2.5" : "bg-[#1B171C] rounded-lg size-2.5"
        }
      ></div>
      <div
        className={
          indicator === 2 ? "bg-[#C140D7] rounded-lg size-2.5" : "bg-[#1B171C] rounded-lg size-2.5"
        }
      ></div>
      <div
        className={
          indicator === 3 ? "bg-[#C140D7] rounded-lg size-2.5" : "bg-[#1B171C] rounded-lg size-2.5"
        }
      ></div>
    </div>
  );
};
export default CarouselIndicators;
