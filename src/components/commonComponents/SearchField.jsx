import FeatherIcon from "feather-icons-react";

const SearchField = ({ value }) => {
  return (
    <div>
      <input
        className='relative bg-brand-fore-dark px-6 py-6 rounded-full outline-0 w-full text-brand-text-light'
        type='text'
        placeholder={value}
      />
      <FeatherIcon icon='crosshair' className='top-10 right-10 absolute' size='30' />
    </div>
  );
};
export default SearchField;
