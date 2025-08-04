import ProfilePicture from "../../assets/profile-pic-62px.png";

const UploadFileInputField = ({ type, value }) => {
  return (
    <label>
      <input hidden type={type} placeholder={value} />
      <div className='flex justify-between items-center bg-brand-fore-dark mb-1 px-6 py-4 rounded-xl outline-0 w-full text-brand-text-light/50'>
        Profile picture
        <img src={ProfilePicture} alt='' />
      </div>
    </label>
  );
};
export default UploadFileInputField;
