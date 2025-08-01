const BtnGradientBorder = ({ value }) => {
  return (
    <button className='inline bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary p-0.5 rounded-lg cursor-pointer p'>
      <div className='bg-brand-bg-dark rounded-md'>
        <div className='inline-block bg-clip-text bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary px-8 py-3 font-extrabold text-transparent text-sm'>
          {value}
        </div>
      </div>
    </button>
  );
};
export default BtnGradientBorder;
