import InputField from "../../components/commonComponents/InputField";
import TextareaField from "../../components/commonComponents/TextareaField";

const CustomerAccountSettings = () => {
  const customer = {
    name: "Johnson Bhaskaran",
  };

  return (
    <div className='flex flex-col items-center mx-6'>
      <div className='mt-14'>
        <h1 className='font-bold text-3xl'>Account Settings</h1>
      </div>
      <div className='mt-12 mr-auto'>
        <p className='text-xl'>Welcome, {customer.name}</p>
      </div>
      <div className='space-y-1 mt-8 min-w-md'>
        <InputField value={"Full Name"} type={"text"} />
        <InputField value={"Email"} type={"text"} />
        <TextareaField value={"Email"} type={"text"} />
      </div>
    </div>
  );
};
export default CustomerAccountSettings;
