import ChefEarningsListItem from "./ChefEarningsListItem";
import FoodImgMini_1 from "../../assets/Food-img-1-mini.png";
import FoodImgMini_2 from "../../assets/Food-img-2-mini.png";
import FoodImgMini_3 from "../../assets/Food-img-3-mini.png";

const ChefEarningsListTable = ({
  orderId,
  customerName,
  orderValue,
  paymentStatus,
  orderTime,
  orderDate,
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
              Order value: <span className='font-bold'>{orderValue}</span>
            </p>
          </div>
          <div className='flex flex-col text-right grow'>
            <p>{orderTime}</p>
            <p>{orderDate}</p>
            <p>{paymentStatus}</p>
          </div>
        </div>
      </div>

      {/* Chef Earnings List Items */}
      <div className='space-y-2 m-2'>
        <ChefEarningsListItem
          imgSrc={FoodImgMini_1}
          itemName={"Fish Fry"}
          itemSize={"(small)"}
          price={"₹ 150.00"}
          addnInfo={"extra cutlery"}
          selectQuantity={"1"}
          netQuantity={"120-150 gms"}
        />
        <ChefEarningsListItem
          imgSrc={FoodImgMini_2}
          itemName={"Kebab"}
          itemSize={""}
          price={"₹ 175.00"}
          addnInfo={"Nil"}
          selectQuantity={"2"}
          netQuantity={"250 ml"}
        />
      </div>
    </div>
  );
};
export default ChefEarningsListTable;
