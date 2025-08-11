import ChefEarningsListItem from "./ChefEarningsListItem";
import FoodImgMini_1 from "../../assets/Food-img-1-mini.png";
import FoodImgMini_2 from "../../assets/Food-img-2-mini.png";
import FoodImgMini_3 from "../../assets/Food-img-3-mini.png";

const ChefEarningsListTable = ({
  orderId,
  customerName,
  yourEarnings,
  paymentStatus,
  payoutStatus,
  orderTime,
  orderDate,
  imgSrc,
  itemName,
  itemSize,
  price,
  addnInfo,
  selectQuantity,
  netQuantity,
}) => {
  return (
    <div className='border rounded-xl'>
      {/* Earnings Table Title bar */}
      <div className='m-2 p-1 rounded-lg bg-brand-text-light'>
        <div className='flex justify-between text-brand-fore-dark'>
          <div className='flex flex-col grow'>
            <p>
              Order ID# <span className='font-bold'>{orderId}</span>
            </p>
            <p>
              Customer: <span className='font-bold'>{customerName}</span>
            </p>
            <p>
              Your Earnings: <span className='font-bold'>{yourEarnings}</span>
            </p>
          </div>
          <div className='flex flex-col text-right grow'>
            <p>{orderDate}</p>
            <p>{orderTime}</p>
            <p>{paymentStatus}</p>
          </div>
        </div>
      </div>

      {/* Chef Earnings List Items */}
      <div className='space-y-2 m-2'>
        <ChefEarningsListItem
          imgSrc={imgSrc}
          itemName={itemName}
          itemSize={itemSize}
          price={price}
          addnInfo={addnInfo}
          selectQuantity={selectQuantity}
          netQuantity={netQuantity}
          payoutStatus={payoutStatus}
        />
      </div>
    </div>
  );
};
export default ChefEarningsListTable;
