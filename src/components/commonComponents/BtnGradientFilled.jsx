const BtnGradientFilled = ({ value }) => {
  return (
    <button className='inline bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary p-0.5 rounded-lg cursor-pointer'>
      <div className='inline-block bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary px-8 py-3 font-extrabold text-brand-bg-light text-base'>
        {value}
      </div>
    </button>
  );
};
export default BtnGradientFilled;
