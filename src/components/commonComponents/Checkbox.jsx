const Checkbox = () => {
  return (
    <div>
      <label className='flex space-x-2'>
        <input
          className='bg-brand-fore-dark checked:border rounded-sm size-4.5 checked:bg-brand-text-light appearance-none'
          type='checkbox'
        />
        <p>Remember me</p>
      </label>
    </div>
  );
};
export default Checkbox;
