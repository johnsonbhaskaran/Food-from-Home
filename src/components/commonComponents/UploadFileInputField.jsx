import ChefPictureSmall from "../../assets/chef-pic-32px.png";

const UploadFileInputField = ({ type, value }) => {
  return (
    <label>
      <input hidden type={type} placeholder={value} />
      <div className='flex justify-between items-center bg-brand-fore-dark mb-1 px-6 py-4 rounded-xl outline-0 w-full text-brand-text-light/50'>
        {value}
        <img src={ChefPictureSmall} alt='' />
      </div>
    </label>
  );
};
export default UploadFileInputField;
