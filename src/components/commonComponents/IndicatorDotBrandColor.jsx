const IndicatorDotBrandColor = ({ value }) => {
  return (
    <div className='-top-2 right-4 absolute flex justify-center items-center rounded-full size-5 bg-brand-text-dark text-sm'>
      {value}
    </div>
  );
};
export default IndicatorDotBrandColor;
