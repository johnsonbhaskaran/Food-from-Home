import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const SearchField = ({ value, onClick, onChange, placeholder }) => {
  return (
    <div>
      <input
        onClick={onClick}
        onChange={onChange}
        className='relative bg-brand-fore-dark px-6 py-6 rounded-full outline-0 w-full text-brand-text-light'
        type='text'
        placeholder={placeholder}
        value={value}
      />
      <Link to='/customer/store'>
        <FeatherIcon icon='crosshair' className='top-10 right-10 absolute' size='30' />
      </Link>
    </div>
  );
};
export default SearchField;
