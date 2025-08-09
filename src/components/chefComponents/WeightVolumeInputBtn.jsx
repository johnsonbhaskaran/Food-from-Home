const WeightVolumeInputBtn = ({ text }) => {
  return (
    <button className='flex justify-between items-center gap-2 bg-brand-fore-dark px-5 py-4 rounded-lg w-full'>
      <div className='text-brand-text-dark text-left grow'>{text}</div>
    </button>
  );
};
export default WeightVolumeInputBtn;
