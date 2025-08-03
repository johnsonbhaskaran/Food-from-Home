const TextareaField = ({ value }) => {
  return (
    <div>
      <textarea
        className='bg-brand-fore-dark px-6 py-4 rounded-xl outline-0 w-full h-32 text-brand-text-light leading-6 resize-none'
        placeholder={value}
      />
    </div>
  );
};
export default TextareaField;
