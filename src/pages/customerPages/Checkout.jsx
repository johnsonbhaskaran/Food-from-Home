import BtnGradientMega from "../../components/commonComponents/BtnGradientMega";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import OrderListItem from "../../components/commonComponents/OrderListItem";
import FoodItemImageMini_1 from "../../assets/Food-img-1-mini.png";
import FoodItemImageMini_2 from "../../assets/Food-img-2-mini.png";

const Checkout = () => {
  const orderID = "00123";

  return (
    <div className='relative flex flex-col mx-auto mb-44 px-4 md:max-w-2xl h-dvh container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-3xl text-center'>Checkout</h1>
      </div>

      {/* Saved address */}
      <div className='space-y-4 bg-brand-fore-dark mt-6 p-6 rounded-xl'>
        <div className='flex justify-between'>
          <p className='font-bold md:text-lg'>Saved address</p>
          <p>edit</p>
        </div>
        <div className='flex justify-between items-start gap-4'>
          <input
            type='checkbox'
            className='flex justify-center items-center bg-brand-fore-dark checked:m-0.5 mt-1 checked:mt-1 border checked:border rounded checked:outline checked:outline-offset-4 w-4 h-4 checked:size-3 checked:bg-brand-text-light appearance-none'
          />
          <p className='text-sm md:text-base grow'>
            <p>Akshaya Nagar 1st Block 1st Cross,</p>
            <p>Ramamurthy Nagar,</p>
            <p>Bangalore-560016 </p>
          </p>
        </div>

        {/* Add new address */}
        <div className='flex justify-end'>
          <BtnTransparent text={"Add new addresss"} />
        </div>
      </div>

      {/* Order ID# */}
      <div className='space-y-4 bg-brand-fore-dark mt-6 py-4 rounded-xl'>
        <h2 className='font-bold text-xl text-center'>Order ID# {orderID}</h2>
      </div>

      {/* Summary */}
      <div className='space-y-4 my-6 p-4 rounded-xl'>
        <h2 className='font-bold text-xl'>Summary</h2>

        <div className='space-y-2 my-6'>
          <div className=''>
            <OrderListItem
              imgSrc={false}
              price={"₹ 150 / pcs"}
              itemName={"Fish Fry"}
              itemSize={"(small)"}
              addnInfo={"extra cutlery"}
              selectQuantity={1}
            />
          </div>
          <div className=''>
            <OrderListItem
              imgSrc={false}
              price={"₹ 175 / pack"}
              itemName={"Kebab"}
              itemSize={""}
              addnInfo={"No instruction"}
              selectQuantity={1}
            />
          </div>
          <div className=''>
            <OrderListItem
              imgSrc={false}
              price={"₹ 150 / pcs"}
              itemName={"Fish Fry"}
              itemSize={"(small)"}
              addnInfo={"extra cutlery"}
              selectQuantity={1}
            />
          </div>
          <div className=''>
            <OrderListItem
              imgSrc={false}
              price={"₹ 175 / pack"}
              itemName={"Kebab"}
              itemSize={""}
              addnInfo={"No instruction"}
              selectQuantity={1}
            />
          </div>
        </div>
      </div>

      {/* Jumbo CTA button */}
      <div className='bottom-26 md:bottom-30 sticky inset-x-0 mx-6 md:max-w-2xl'>
        <BtnGradientMega text={"Confirm Order"} quantity={3} price={"₹ 625.00"} />
      </div>
    </div>
  );
};
export default Checkout;
