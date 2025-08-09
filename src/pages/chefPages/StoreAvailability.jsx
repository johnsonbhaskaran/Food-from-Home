import DropdownBtn from "../../components/commonComponents/DropdownBtn";
import DropdownTextBtn from "../../components/commonComponents/DropdownTextBtn";
import InputField from "../../components/commonComponents/InputField";

const StoreAvailability = () => {
  return (
    <div className='mx-auto md:max-w-lg container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Store Availability update</h1>
      </div>

      {/* Sub Title */}
      <div className='mx-6 mt-12'>
        <p className='text-base'>Update availability</p>
        <p className='text-xl'>Current Items in Store (2)</p>
      </div>

      {/* Store Items List */}

      {/* Add New Items to Store */}
      <div className='space-y-2 mx-6 mt-12'>
        {/* Availability toggle */}
        <div>
          <DropdownTextBtn text={"Add Food Items to Store"} chevron={"down"} />
        </div>
        <DropdownBtn text={"Category Name"} />
        <InputField value={"Food Name"} type={"text"} />
        <InputField value={"Ingredient 1"} type={"text"} />
        <InputField value={"Ingredient 2"} type={"text"} />
      </div>
    </div>
  );
};
export default StoreAvailability;
