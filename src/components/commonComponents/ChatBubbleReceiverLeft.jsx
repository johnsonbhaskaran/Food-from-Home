const ChatBubbleReceiverLeft = ({ title, text, time }) => {
  return (
    <div className='bg-brand-fore-dark mb-4 p-3 rounded-2xl rounded-tl-none w-2/3'>
      <div className=''>{title}</div>
      <div className=''>{text}</div>
      <div className='text-xs text-right'>{time}</div>
    </div>
  );
};
export default ChatBubbleReceiverLeft;
