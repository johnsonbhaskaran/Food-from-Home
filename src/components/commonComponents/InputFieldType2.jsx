const InputFieldType2 = ({ type, value, maxLength }) => {
  return (
    <input
      className='bg-brand-bg-dark px-6 py-4 border rounded-md outline-0 w-full text-brand-text-light remove-arrow'
      type={type}
      placeholder={value}
      maxLength={maxLength}
      // pattern='\d*'
    />
  );
};
export default InputFieldType2;
