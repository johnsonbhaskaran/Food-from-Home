import DropdownBtn from "../../components/commonComponents/DropdownBtn";

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
      <div className='mx-6 mt-12'>
        <DropdownBtn text={"Category Name"} />
      </div>
    </div>
  );
};
export default StoreAvailability;
