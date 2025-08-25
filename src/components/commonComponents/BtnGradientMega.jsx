const BtnGradientMega = ({ text, quantity, price }) => {
  return (
    <button className='bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary px-4 py-3 rounded-lg w-full font-bold text-brand-bg-light text-base'>
      <div className='flex gap-4'>
        <div className='flex flex-none justify-center items-center rounded-full size-6 font-medium bg-brand-text-sm'>
          {quantity}
        </div>
        <div className='flex-none'>{text}</div>
        <div className='text-right grow'>{price}</div>
      </div>
    </button>
  );
};
export default BtnGradientMega;
