const FoodItemCardMini = ({ imgSrc }) => {
  return (
    <div className='relative'>
      <img src={imgSrc} className='rounded-xl' />
      <div className='absolute inset-0 flex justify-end items-start'>
        <div className='bg-brand-fore-dark px-2 rounded-tr-xl'>x</div>
      </div>
    </div>
  );
};

export default FoodItemCardMini;
