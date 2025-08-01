import Checkbox from "../../components/commonComponents/Checkbox";
import InputField from "../../components/commonComponents/InputField";
import BtnGradientBorder from "../../components/commonComponents/BtnGradientBorder";
import BtnTextLink from "../../components/commonComponents/BtnTextLink";

const CustomerSignup = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='space-x-2 mx-auto mt-28'>
        {/* Sub Title */}
        <h2 className='inline-block bg-clip-text bg-gradient-to-r from-13% from-brand-secondary to-70% to-brand-primary font-bold text-transparent text-3xl'>
          Welcome pal
        </h2>
        <span className='text-3xl'>🤗</span>
      </div>
      <div className='mx-6 md:mx-auto md:min-w-md'>
        {/* Title */}
        <h1 className='font-extrabold text-2xl text-center'>Sign up for new account</h1>
        {/* Input Fields */}
        <div className='space-y-1 mt-8'>
          <InputField value={"Full Name"} type={"text"} />
          <InputField value={"Email"} type={"text"} />
          <InputField value={"Password"} type={"password"} />
          <InputField value={"Re-type password"} type={"password"} />
        </div>
        {/* Remember me */}
        <div className='flex justify-between my-2'>
          <Checkbox text={"I agree to the terms & conditions and privacy policy"} />
        </div>
        {/* Sign in Btn */}
        <div className='flex justify-end my-6'>
          <BtnGradientBorder value={"Sign up"} />
        </div>
      </div>
      {/* Text link */}
      <div className='mx-6 md:mx-auto mt-4 mb-8 md:min-w-md'>
        <div className='flex justify-between'>
          <BtnTextLink text={"Chef Registration"} iconSide={"left"} />
          <BtnTextLink text={"skip"} iconSide={"right"} />
        </div>
      </div>
    </div>
  );
};
export default CustomerSignup;
