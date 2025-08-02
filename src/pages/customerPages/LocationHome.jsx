import Map_dark from "../../assets/Dark-Map-img.png";
import SearchDropdown from "../../components/commonComponents/SearchDropdown";
import SearchField from "../../components/commonComponents/SearchField";

const LocationHome = () => {
  return (
    <div
      className='relative bg-cover bg-no-repeat bg-center w-screen h-screen'
      style={{ backgroundImage: `url(${Map_dark})` }}
    >
      <div className='absolute my-14 p-5 w-full md:max-w-1/3'>
        <SearchField value={"Address or PIN code or What3Words"} />
        <SearchDropdown />
      </div>
    </div>
  );
};
export default LocationHome;
