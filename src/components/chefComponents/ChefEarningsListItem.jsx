const ChefEarningsListItem = ({
  imgSrc,
  itemName,
  itemSize,
  price,
  addnInfo,
  timeDuration,
  selectQuantity,
  netQuantity,
  isLate,
}) => {
  return (
    <div className='flex items-stretch gap-2'>
      {imgSrc && (
        <div className=''>
          <img className='rounded-lg object-cover' src={imgSrc} />
        </div>
      )}
      <div className='flex flex-col justify-start grow'>
        <div className='flex grow'>
          <div className='flex flex-col px-1 grow'>
            <div className='flex items-center gap-1 my-0.5'>
              <p className='font-semibold text-xl'>{itemName}</p>
              <p className='text-xs'>{itemSize}</p>
            </div>
            <div className='font-medium'>{price}</div>
            <div className='text-sm'>
              <span className='font-bold'>Instruction: </span>
              {addnInfo}
            </div>
            <div className='text-sm'>{netQuantity}</div>
          </div>
          <div className='flex flex-col flex-none justify-between items-end p-2 rounded'>
            <p className='text-xl'>x {selectQuantity}</p>
          </div>
        </div>
        <div className='flex justify-end items-center gap-2'>
          <p
            className={`text-bold  text-sm ${
              isLate ? "text-brand-warning-Red" : "text-brand-notify-ON"
            }`}
          >
            {timeDuration}
          </p>
          <button
            className={`px-2 py-1.5 rounded-sm bg-brand-text-dark text-bold ${
              isLate ? "text-brand-warning-Red" : "text-brand-fore-light"
            } text-sm`}
          >
            Mark Ready
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChefEarningsListItem;
