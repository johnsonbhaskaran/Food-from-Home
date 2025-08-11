const ChefOrderHistoryListItem = ({
  imgSrc,
  itemName,
  itemSize,
  price,
  addnInfo,
  selectQuantity,
  netQuantity,
  // payoutStatus,
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
          <div className='flex flex-col pr-1 grow'>
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
          <div className='ml-1 px-1 w-14 text-right'>
            <p className='mt-1'>x {selectQuantity}</p>
          </div>
        </div>
        <div className='flex justify-end gap-2'>
          <button
            className={`px-2 py-1.5 rounded-sm bg-brand-text-dark text-bold text-brand-fore-light text-sm`}
          >
            view transaction
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChefOrderHistoryListItem;
