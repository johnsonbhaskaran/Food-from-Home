import FeatherIcon from "feather-icons-react";

const BtnTextLink = ({ text, iconSide }) => {
  return (
    <div>
      {iconSide === "right" ? (
        <button className='flex items-center cursor-pointer'>
          {text}
          <FeatherIcon className='ml-1' icon='arrow-up-right' size='16' />
        </button>
      ) : (
        <button className='flex items-center cursor-pointer'>
          <FeatherIcon className='mr-1' icon='user-check' size='16' />
          {text}
        </button>
      )}
    </div>
  );
};
export default BtnTextLink;
