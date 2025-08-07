import FeatherIcon from "feather-icons-react";
import DynamicBtnField from "./DynamicBtnField";

const OrderListItem = ({ imgSrc, itemName, itemSize, price, addnInfo, selectQuantity }) => {
  return (
    <div className='flex justify-between items-stretch gap-2'>
      {imgSrc && (
        <div className='relative flex-none'>
          <img className='rounded-md size-24 object-cover' src={imgSrc} />
          <FeatherIcon
            icon='x'
            className='absolute inset-0 bg-red-700/70 m-1 p-1 rounded-full size-6 text-red-300'
          />
        </div>
      )}
      <div className='flex flex-col justify-center gap-2 p-2 grow'>
        <div className='flex items-center gap-1'>
          <p className='font-bold'>{itemName}</p>
          <p className='text-xs'>{itemSize}</p>
        </div>
        <div className='font-medium'>{price}</div>
        <div className='text-sm'>{addnInfo}</div>
      </div>
      <div className='flex flex-col flex-none justify-between items-end p-2 rounded'>
        <DynamicBtnField>{selectQuantity}</DynamicBtnField>
      </div>
    </div>
  );
};
export default OrderListItem;
