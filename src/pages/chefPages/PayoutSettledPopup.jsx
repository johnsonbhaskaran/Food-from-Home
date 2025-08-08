import FeatherIcon from "feather-icons-react";

const PayoutSettledPopup = () => {
  return (
    <div className='flex justify-center items-center mx-auto h-dvh container'>
      <div className='flex flex-col justify-center items-center gap-4 bg-brand-fore-dark mx-4 py-28 rounded-xl w-full md:max-w-lg'>
        <FeatherIcon icon='check-circle' size='36' />
        <h1 className='font-bold text-xl'>Payout successful</h1>
        <p className='font-bold text-xl'>₹ 525.00</p>
        <p className='font-bold text-xl'>Sent to Bank Acc# 3125489795133</p>
      </div>
    </div>
  );
};
export default PayoutSettledPopup;
