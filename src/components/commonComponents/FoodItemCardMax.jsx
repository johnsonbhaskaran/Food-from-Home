const FoodItemCardMax = ({ children, imgSrc }) => {
  console.log(children[0].type);

  return (
    <div className='group relative shadow-lg mx-auto mt-6 border border-amber-100 rounded-[20px] max-w-fit overflow-hidden'>
      <img
        src={imgSrc}
        alt=''
        className='group-hover:scale-110 transition-transform duration-400'
      />
      <div className='absolute inset-0 flex items-end bg-gradient-to-t from-0% from-black/100 via-30% via-black/60 to-transparent'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  );
};
export default FoodItemCardMax;
