import BtnGradientBorder from "../../components/commonComponents/BtnGradientBorder";
import InputField from "../../components/commonComponents/InputField";
import TextareaField from "../../components/commonComponents/TextareaField";
import UploadFileInputField from "../../components/commonComponents/UploadFileInputField";

const CustomerAccountSettings = () => {
  const customer = {
    name: "Johnson B",
  };

  return (
    <div className='mx-auto md:max-w-lg container'>
      <div className='mt-14'>
        <h1 className='font-bold text-3xl text-center'>Account Settings</h1>
      </div>
      <div className='mx-6 mt-12'>
        <p className='text-xl'>Welcome, {customer.name}</p>
      </div>
      <div className='space-y-1 mx-6 mt-4'>
        <InputField value={customer.name} type={"text"} />
        <InputField value={"Change Password"} type={"password"} />
        <InputField value={"Contact number"} type={"tel"} />
        <UploadFileInputField value={"Profile picture"} type={"file"} />
        <TextareaField value={"Delivery address"} type={"text"} />
      </div>
      <div className='block mx-6 my-4 text-right'>
        <BtnGradientBorder value={"Save"} />
      </div>
    </div>
  );
};
export default CustomerAccountSettings;
