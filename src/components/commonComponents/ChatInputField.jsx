import FeatherIcon from "feather-icons-react";
import InputField from "./InputField";

const ChatInputField = () => {
  return (
    <div className='flex gap-1 w-full'>
      <div className='bg-brand-fore-dark rounded-xl w-full'>
        <InputField value={"Enter your message"} type={"text"} />
      </div>

      <div className='flex flex-none justify-center items-center bg-brand-fore-dark rounded-full size-15'>
        <FeatherIcon icon='send' />
      </div>
    </div>
  );
};
export default ChatInputField;
