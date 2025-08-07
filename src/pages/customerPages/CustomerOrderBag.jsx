import OrderListItem from "../../components/commonComponents/OrderListItem";
import FoodItemImageMini_1 from "../../assets/Food-img-1-mini.png";
import FoodItemImageMini_2 from "../../assets/Food-img-2-mini.png";
import FoodItemImageMini_3 from "../../assets/Food-img-3-mini.png";

const CustomerOrderBag = () => {
  return (
    <div className='mx-auto px-4 md:max-w-3xl container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-3xl text-center'>Your order bag</h1>
      </div>

      {/* Order list items */}
      <div className='space-y-2 mt-6'>
        <div className=''>
          <OrderListItem
            imgSrc={FoodItemImageMini_1}
            price={"₹ 150 / pcs"}
            itemName={"Fish Fry"}
            itemSize={"(small)"}
            addnInfo={"extra cutlery"}
            selectQuantity={1}
          />
        </div>
        <div className=''>
          <OrderListItem
            imgSrc={FoodItemImageMini_2}
            price={"₹ 175 / pack"}
            itemName={"Kebab"}
            itemSize={""}
            addnInfo={"No instruction"}
            selectQuantity={1}
          />
        </div>
        <div className=''>
          <OrderListItem
            imgSrc={FoodItemImageMini_3}
            price={"₹ 300 / box"}
            itemName={"Potato Fries"}
            itemSize={""}
            addnInfo={"extra mayonaise"}
            selectQuantity={3}
          />
        </div>
      </div>
    </div>
  );
};
export default CustomerOrderBag;
