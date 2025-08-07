import DynamicBtnField from "./DynamicBtnField";

const OrderListItem = ({ imgSrc, itemName, itemSize, price, addnInfo, selectQuantity }) => {
  return (
    <div className='flex justify-between items-stretch gap-2'>
      <img className='flex-none rounded size-28 object-cover' src={imgSrc} />
      <div className='flex flex-col justify-center gap-2 p-2 rounded grow'>
        <div className='flex items-center gap-1'>
          <p className='font-bold'>{itemName}</p>
          <p className='text-xs'>{itemSize}</p>
        </div>
        <div className='font-medium'>{price}</div>
        <div className='text-sm'>{addnInfo}</div>
      </div>
      <div className='flex-none p-2 rounded'>
        <DynamicBtnField price={price}>{selectQuantity}</DynamicBtnField>
      </div>
    </div>
  );
};
export default OrderListItem;
