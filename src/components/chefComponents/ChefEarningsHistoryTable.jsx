import ChefOrderHistoryListItem from "./ChefOrderHistoryListItem";

const ChefEarningsHistoryTable = ({
  orderId,
  customerName,
  orderValue,
  orderStatus,
  orderDate,
  orderTime,
  imgSrc,
  itemName,
  itemSize,
  price,
  addnInfo,
  selectQuantity,
  netQuantity,
  paymentStatus,
}) => {
  return (
    <div>
      {/* Table Title bar */}
      <div className='m-2 p-1 rounded-lg bg-brand-text-dark'>
        <div className='flex justify-between text-brand-fore-dark'>
          <div className='flex flex-col grow'>
            <p>
              Order ID# <span className='font-bold'>{orderId}</span>
            </p>
            <p>
              Customer: <span className='font-bold'>{customerName}</span>
            </p>
            <p>
              Order value: <span className='font-bold'>{orderValue}</span>
            </p>
          </div>
          <div className='flex flex-col text-right grow'>
            <p>{orderDate}</p>
            <p>{orderTime}</p>
            <p>{orderStatus}</p>
          </div>
        </div>
      </div>

      {/* Chef Order List Items */}
      <div className='space-y-2 m-2'>
        <ChefEarningsHistoryListItem
          imgSrc={imgSrc}
          itemName={itemName}
          itemSize={itemSize}
          price={price}
          addnInfo={addnInfo}
          selectQuantity={selectQuantity}
          netQuantity={netQuantity}
          paymentStatus={paymentStatus}
        />
      </div>
    </div>
  );
};
export default ChefEarningsHistoryTable;
