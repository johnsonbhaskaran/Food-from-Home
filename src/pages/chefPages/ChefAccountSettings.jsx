import BtnGradientBorder from "../../components/commonComponents/BtnGradientBorder";
import InputField from "../../components/commonComponents/InputField";
import TextareaField from "../../components/commonComponents/TextareaField";
import UploadFileInputField from "../../components/commonComponents/UploadFileInputField";
import ChefPictureSmall from "../../assets/chef-pic-32px.png";

const ChefAccountSettings = () => {
  const chef = {
    name: "Samir Pawar",
    storeName: "Revathy’s Kitchen",
  };

  return (
    <div className='mx-auto md:max-w-lg container'>
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Account Settings</h1>
      </div>
      <div className='mx-6 mt-12'>
        <p className='text-xl'>Welcome, {chef.name}</p>
      </div>
      <div className='space-y-1 mx-6 mt-4'>
        <InputField value={chef.name} type={"text"} />
        <InputField value={"Change password"} type={"password"} />
        <InputField value={"Store Name"} type={"text"} />
        <InputField value={"Store Contact number"} type={"tel"} />
        <InputField value={"Store Availability Timings"} type={"text"} />
        <UploadFileInputField value={"Store Logo"} type={"file"} imgSrc={ChefPictureSmall} />
        <TextareaField value={"Store address"} type={"text"} />
      </div>
      <div className='block mx-6 my-4 text-right'>
        <BtnGradientBorder value={"Save"} />
      </div>
    </div>
  );
};
export default ChefAccountSettings;
