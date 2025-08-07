import FeatherIcon from "feather-icons-react";

const CustomerPaymentSuccessfulPopup = () => {
  return (
    <div className='flex justify-center items-center mx-auto h-dvh container'>
      <div className='flex flex-col justify-center items-center gap-4 bg-brand-fore-dark mx-4 py-36 rounded-xl w-full md:max-w-lg'>
        <FeatherIcon icon='check-circle' size='36' />
        <h1 className='font-bold text-xl'>Order successful</h1>
      </div>
    </div>
  );
};
export default CustomerPaymentSuccessfulPopup;
