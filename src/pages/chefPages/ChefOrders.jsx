import ChefOrderHistoryTable from "../../components/chefComponents/ChefOrderHistoryTable";
import ChefOrderListTable from "../../components/chefComponents/ChefOrderListTable";
import DropdownBtn from "../../components/commonComponents/DropdownBtn";

const ChefOrders = () => {
  return (
    <div className='mx-auto mb-36 md:max-w-lg container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Orders Hub</h1>
      </div>

      {/* Today's Orders */}
      <div className='mx-6 mt-12'>
        {/* Sub Title */}
        <p className='text-xl'>
          Today's Orders <span className='text-base'>(27/07/2025)</span>
        </p>

        {/* Order List Table */}
        <div className='mt-6'>
          <ChefOrderListTable
            orderId={"00123"}
            customerName={"Johnson B"}
            orderValue={"₹ 500.00"}
            orderStatus={"Not delivered"}
            timeLeft={"25 mins left"}
            orderTime={"02:30 pm"}
          />
        </div>
      </div>

      {/* Order History */}
      <div className='space-y-4 mx-6 mt-12'>
        <p className='mb-6 text-xl'>Order History</p>
        <DropdownBtn text={"26/07/2025"} btnSize={"w-full"} chevron={"up"} />
        <ChefOrderHistoryTable
          orderId={"00106"}
          customerName={"Johnson B"}
          orderValue={"₹ 300.00"}
          orderStatus={"Delivered"}
          timeLeft={"25 mins left"}
          orderTime={"04:48 pm"}
        />
      </div>
    </div>
  );
};
export default ChefOrders;
