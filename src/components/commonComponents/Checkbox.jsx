const Checkbox = ({ text }) => {
  return (
    <div>
      <label className='flex items-center space-x-2'>
        <input
          className='bg-brand-fore-dark checked:border rounded-sm size-4.5 checked:bg-brand-text-light appearance-none'
          type='checkbox'
        />
        <p>{text}</p>
      </label>
    </div>
  );
};
export default Checkbox;
