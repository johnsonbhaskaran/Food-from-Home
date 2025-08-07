import { useState } from "react";
import BtnGradientMega from "../../components/commonComponents/BtnGradientMega";
import BtnTransparent from "../../components/commonComponents/BtnTransparent";
import InputFieldType2 from "../../components/commonComponents/InputFieldType2";

const CustomerPayment = () => {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showUPI, setShowUPI] = useState(false);

  return (
    <div className='relative flex flex-col mx-auto px-4 md:max-w-2xl h-dvh container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-3xl text-center'>Checkout</h1>
      </div>

      {/* Select payment method */}
      <div className='space-y-4 bg-brand-fore-dark mt-6 p-6 rounded-xl'>
        <div className='flex justify-between'>
          <p className='font-bold text-lg'>Payment method</p>
        </div>

        {/* Credit card input */}
        <div
          onClick={() => {
            setShowCreditCard(true);
            setShowUPI(false);
          }}
          className='flex justify-between items-start gap-4'
        >
          <input
            name='payment'
            id='credit-card'
            type='radio'
            className='flex justify-center items-center bg-brand-fore-dark checked:m-0.5 mt-1 checked:mt-1 border checked:border rounded-full checked:outline checked:outline-offset-4 w-4 h-4 checked:size-3 checked:bg-brand-text-light appearance-none'
          />
          <label className='text-base grow' htmlFor='credit-card'>
            Credit card
          </label>
        </div>

        {/* UPI input */}
        <div
          onClick={() => {
            setShowCreditCard(false);
            setShowUPI(true);
          }}
          className='flex justify-between items-start gap-4'
        >
          <input
            name='payment'
            id='upi'
            type='radio'
            className='flex justify-center items-center bg-brand-fore-dark checked:m-0.5 mt-1 checked:mt-1 border checked:border rounded-full checked:outline checked:outline-offset-4 w-4 h-4 checked:size-3 checked:bg-brand-text-light appearance-none'
          />
          <label className='text-base grow' htmlFor='upi'>
            UPI
          </label>
        </div>

        {/* Cash on delivery input */}
        <div
          onClick={() => {
            setShowCreditCard(false);
            setShowUPI(false);
          }}
          className='flex justify-between items-start gap-4'
        >
          <input
            name='payment'
            id='cash-on-delivery'
            type='radio'
            className='flex justify-center items-center bg-brand-fore-dark checked:m-0.5 mt-1 checked:mt-1 border checked:border rounded-full checked:outline checked:outline-offset-4 w-4 h-4 checked:size-3 checked:bg-brand-text-light appearance-none'
          />
          <label className='text-base grow' htmlFor='cash-on-delivery'>
            Cash on delivery
          </label>
        </div>

        {/* Show Credit card input fields */}
        {showCreditCard && (
          <div className='flex flex-col space-y-2'>
            <InputFieldType2 type={"tel"} value={"Credit card number"} maxLength={19} />
            <div className='flex gap-2'>
              <div className='w-1/2'>
                <InputFieldType2 type={"number"} value={"CVV code"} maxLength={4} />
              </div>
              <div className='w-1/2'>
                <InputFieldType2 type={"number"} value={"MM/YY"} maxLength={5} />
              </div>
            </div>
            <InputFieldType2 type={"text"} value={"Name on card"} maxLength={50} />
          </div>
        )}

        {/* Show UPI input fields */}
        {showUPI && (
          <div className='flex flex-col space-y-2'>
            <InputFieldType2 type={"text"} value={"Enter VPA"} maxLength={30} />
          </div>
        )}
      </div>

      {/* Jumbo CTA button */}
      <div className='bottom-26 md:bottom-30 absolute inset-x-0 mx-6 md:max-w-2xl'>
        <BtnGradientMega text={"Make payment"} quantity={3} price={"₹ 625.00"} />
      </div>
    </div>
  );
};
export default CustomerPayment;
