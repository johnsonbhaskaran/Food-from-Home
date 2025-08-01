const InputField = ({ value, type }) => {
  return (
    <div className=''>
      <input
        className='bg-brand-fore-dark px-6 py-4 rounded-xl outline-0 w-full text-brand-text-light'
        type={type}
        placeholder={value}
      />
    </div>
  );
};
export default InputField;
