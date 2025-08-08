const ChatBubbleSenderRight = ({ title, text, time }) => {
  return (
    <div className='bg-brand-fore-dark ms-auto mb-4 p-3 rounded-2xl rounded-tr-none w-2/3'>
      <div className='mb-1 px-1 rounded-tl-lg font-bold bg-brand-text-dark text-brand-text-light text-sm center'>
        {title}
      </div>
      <div className=''>{text}</div>
      <div className='text-xs text-right'>{time}</div>
    </div>
  );
};
export default ChatBubbleSenderRight;
