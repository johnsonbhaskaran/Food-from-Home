import ChefEarningsHistoryTable from "../../components/chefComponents/ChefOrderHistoryTable";
import ChefEarningsListTable from "../../components/chefComponents/ChefEarningsListTable";
import DropdownBtn from "../../components/commonComponents/DropdownBtn";
import FoodImgMini_2 from "../../assets/Food-img-2-mini.png";
import FoodImgMini_3 from "../../assets/Food-img-3-mini.png";
import { useState } from "react";
import BtnGradientMega from "../../components/commonComponents/BtnGradientMega";

const YourEarnings = () => {
  const [isYesterdayOpen, setIsYesterdayOpen] = useState(false);
  const [isDaysAgoOpen, setIsDaysAgoOpen] = useState(false);
  const [isWeekAgoOpen, setIsWeekAgoOpen] = useState(false);
  const [isMonthAgoOpen, setIsMonthAgoOpen] = useState(false);
  const [isYearAgoOpen, setIsYearAgoOpen] = useState(false);

  return (
    <div className='relative mx-auto mb-48 md:max-w-lg container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Your Earnings</h1>
      </div>

      {/* Today's Orders */}
      <div className='mx-6 mt-12'>
        {/* Sub Title */}
        <p className='text-xl'>
          Today's Earnings <span className='text-sm'>(27/07/2025)</span>
        </p>

        {/* Order List Table */}
        <div className='mt-6'>
          <ChefEarningsListTable
            // Earnings History Table Header Props
            orderId={"00123"}
            customerName={"Johnson B"}
            yourEarnings={"₹ 240.00"}
            orderStatus={"Delivered"}
            orderDate={"27/07/2025"}
            orderTime={"02:30 pm"}
            // Earnings History List Item Props
            imgSrc={FoodImgMini_3}
            itemName={"Potato fries"}
            itemSize={""}
            price={"₹ 100.00"}
            addnInfo={"extra mayonnaise"}
            selectQuantity={"3"}
            netQuantity={"100 gms"}
            paymentStatus={"Yet to be settled"}
            payoutStatus={"request payout"}
          />
        </div>
      </div>

      {/* Earnings History */}
      <div className='space-y-4 mx-6 mt-12'>
        <p className='mb-6 text-xl'>Earnings History</p>

        {/* Yesterday */}
        <DropdownBtn
          text={"Yesterday"}
          btnSize={"w-full"}
          chevron={`${isYesterdayOpen ? "up" : "down"}`}
          onClick={() => setIsYesterdayOpen(!isYesterdayOpen)}
        />

        {/* Earnings History Table content */}
        {!!isYesterdayOpen && (
          <div className='space-y-6 border border-brand-text-dark rounded-xl'>
            <ChefEarningsHistoryTable
              // Earnings History Table Header Props
              orderId={"00106"}
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
              payoutStatus={"Payment settled"}
            />
            <ChefEarningsHistoryTable
              // Earnings History Table Header Props
              orderId={"00098"}
              customerName={"Samir Pawar"}
              orderValue={"₹ 300.00"}
              orderStatus={"Cancelled"}
              orderDate={"26/07/2025"}
              orderTime={"02:53 pm"}
              // Earnings History List Item Props
              imgSrc={FoodImgMini_2}
              itemName={"Kebab"}
              itemSize={""}
              price={"₹ 100.00"}
              addnInfo={"Nil"}
              selectQuantity={"3"}
              netQuantity={"250 ml"}
              payoutStatus={"Cancelled by Customer"}
            />
            <ChefEarningsHistoryTable
              // Earnings History Table Header Props
              orderId={"00098"}
              customerName={"Samir Pawar"}
              orderValue={"₹ 300.00"}
              orderStatus={"Delivered"}
              orderDate={"26/07/2025"}
              orderTime={"01:15 pm"}
              // Earnings History List Item Props
              imgSrc={FoodImgMini_3}
              itemName={"Potato fries"}
              itemSize={""}
              price={"₹ 100.00"}
              addnInfo={"extra mayonnaise"}
              selectQuantity={"3"}
              netQuantity={"250 ml"}
              payoutStatus={"Scheduled for Next cycle"}
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
      {/* Jumbo CTA button */}
      <div className='bottom-28 md:bottom-30 fixed inset-x-0 mx-6 md:mx-auto md:max-w-lg'>
        <BtnGradientMega text={"Withdraw Payout"} quantity={3} price={"₹ 240.00"} />
      </div>
    </div>
  );
};

export default YourEarnings;
