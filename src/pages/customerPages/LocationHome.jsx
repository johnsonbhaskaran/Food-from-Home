import { Link } from "react-router-dom";
import Map_dark from "../../assets/Dark-Map-img.png";
import SearchDropdown from "../../components/commonComponents/SearchDropdown";
import SearchField from "../../components/commonComponents/SearchField";
import { useState } from "react";

const LocationHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleDropdown = () => {
    setIsOpen(true);
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div
        className='relative bg-cover bg-no-repeat bg-center mx-auto h-screen'
        style={{ backgroundImage: `url(${Map_dark})` }}
      >
        <div className='absolute my-14 p-5 w-full'>
          <SearchField
            onClick={handleDropdown}
            onChange={handleOnChange}
            placeholder={"Address or PIN code or What3Words"}
            value={inputValue}
          />
          {isOpen && <SearchDropdown value={inputValue} />}
        </div>
      </div>
    </div>
  );
};
export default LocationHome;
