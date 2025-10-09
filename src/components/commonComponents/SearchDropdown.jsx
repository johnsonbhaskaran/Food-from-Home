const SearchDropdown = ({ value }) => {
  return (
    <div>
      <input
        className='relative bg-brand-fore-dark px-6 py-6 rounded-full outline-0 w-full text-brand-text-light'
        type='text'
        placeholder={value}
      />
    </div>
  );
};
export default SearchDropdown;
