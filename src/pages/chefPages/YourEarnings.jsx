import ChefOrderHistoryTable from "../../components/chefComponents/ChefOrderHistoryTable";
import ChefEarningsListTable from "../../components/chefComponents/ChefEarningsListTable";
import DropdownBtn from "../../components/commonComponents/DropdownBtn";
import FoodImgMini_2 from "../../assets/Food-img-2-mini.png";
import FoodImgMini_3 from "../../assets/Food-img-3-mini.png";
import { useState } from "react";

const YourEarnings = () => {
  const [isYesterdayOpen, setIsYesterdayOpen] = useState(false);
  const [isDaysAgoOpen, setIsDaysAgoOpen] = useState(false);
  const [isWeekAgoOpen, setIsWeekAgoOpen] = useState(false);
  const [isMonthAgoOpen, setIsMonthAgoOpen] = useState(false);
  const [isYearAgoOpen, setIsYearAgoOpen] = useState(false);

  return (
    <div className='mx-auto mb-36 md:max-w-lg container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Your Earnings</h1>
      </div>

      {/* Today's Orders */}
      <div className='mx-6 mt-12'>
        {/* Sub Title */}
        <p className='text-xl'>Today's Earnings</p>

        {/* Order List Table */}
        <div className='mt-6'>
          <ChefEarningsListTable
            orderId={"00123"}
            customerName={"Johnson B"}
            orderValue={"₹ 500.00"}
            paymentStatus={"Yet to be settled"}
            orderDate={"27/07/2025"}
            orderTime={"02:30 pm"}
          />
        </div>
      </div>

      {/* Order History */}
      <div className='space-y-4 mx-6 mt-12'>
        <p className='mb-6 text-xl'>Earnings History</p>

        {/* Yesterday */}
        <DropdownBtn
          text={"Yesterday"}
          btnSize={"w-full"}
          chevron={`${isYesterdayOpen ? "up" : "down"}`}
          onClick={() => setIsYesterdayOpen(!isYesterdayOpen)}
        />

        {/* History Table content */}
        {!!isYesterdayOpen && (
          <div className='space-y-6 border border-brand-text-dark rounded-xl'>
            <ChefOrderHistoryTable
              orderId={"00106"}
              // History Table Header Props
              customerName={"Johnson B"}
              orderValue={"₹ 300.00"}
              orderStatus={"Delivered"}
              orderDate={"26/07/2025"}
              orderTime={"04:48 pm"}
              // History List Item Props
              imgSrc={FoodImgMini_3}
              itemName={"Potato fries"}
              itemSize={""}
              price={"₹ 100.00"}
              addnInfo={"extra mayonnaise"}
              selectQuantity={"3"}
              netQuantity={"100 gms"}
              paymentStatus={"Payment settled"}
            />
            <ChefOrderHistoryTable
              orderId={"00098"}
              // History Table Header Props
              customerName={"Samir Pawar"}
              orderValue={"₹ 300.00"}
              orderStatus={"Cancelled"}
              orderDate={"26/07/2025"}
              orderTime={"02:53 pm"}
              // History List Item Props
              imgSrc={FoodImgMini_2}
              itemName={"Kebab"}
              itemSize={""}
              price={"₹ 100.00"}
              addnInfo={"Nil"}
              selectQuantity={"3"}
              netQuantity={"250 ml"}
              paymentStatus={"Cancelled by Customer"}
            />
            <ChefOrderHistoryTable
              orderId={"00098"}
              // History Table Header Props
              customerName={"Samir Pawar"}
              orderValue={"₹ 300.00"}
              orderStatus={"Delivered"}
              orderDate={"26/07/2025"}
              orderTime={"01:15 pm"}
              // History List Item Props
              imgSrc={FoodImgMini_3}
              itemName={"Potato fries"}
              itemSize={""}
              price={"₹ 100.00"}
              addnInfo={"extra mayonnaise"}
              selectQuantity={"3"}
              netQuantity={"250 ml"}
              paymentStatus={"Scheduled for Next cycle"}
            />
          </div>
        )}

        {/* 2 days ago */}
        <DropdownBtn
          text={"2 days ago"}
          btnSize={"w-full"}
          chevron={`${isDaysAgoOpen ? "up" : "down"}`}
          onClick={() => setIsDaysAgoOpen(!isDaysAgoOpen)}
        />

        {/* 1 week ago */}
        <DropdownBtn
          text={"1 week ago"}
          btnSize={"w-full"}
          chevron={`${isWeekAgoOpen ? "up" : "down"}`}
          onClick={() => setIsWeekAgoOpen(!isWeekAgoOpen)}
        />

        {/* 1 month ago */}
        <DropdownBtn
          text={"1 month ago"}
          btnSize={"w-full"}
          chevron={`${isMonthAgoOpen ? "up" : "down"}`}
          onClick={() => setIsMonthAgoOpen(!isMonthAgoOpen)}
        />

        {/* 1 year ago */}
        <DropdownBtn
          text={"1 year ago"}
          btnSize={"w-full"}
          chevron={`${isYearAgoOpen ? "up" : "down"}`}
          onClick={() => setIsYearAgoOpen(!isYearAgoOpen)}
        />
      </div>
    </div>
  );
};

export default YourEarnings;
