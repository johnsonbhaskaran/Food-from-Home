const PillBtn = ({ tags }) => {
  return (
    <div className='flex flex-wrap mb-4'>
      <div className='m-1 px-4 py-2 border border-white rounded-full w-fit text-white'>
        {tags.one}
      </div>
      <div className='m-1 px-4 py-2 border border-white rounded-full w-fit text-white'>
        {tags.two}
      </div>
      <div className='m-1 px-4 py-2 border border-white rounded-full w-fit text-white'>
        {tags.three}
      </div>
      <div className='m-1 px-4 py-2 border border-white rounded-full w-fit text-white'>
        {tags.four}
      </div>
      <div className='m-1 px-4 py-2 border border-white rounded-full w-fit text-white'>
        {tags.five}
      </div>
    </div>
  );
};
export default PillBtn;
