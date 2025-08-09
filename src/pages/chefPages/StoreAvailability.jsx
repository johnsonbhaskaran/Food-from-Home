import { useState } from "react";
import DropdownBtn from "../../components/commonComponents/DropdownBtn";
import DropdownTextBtn from "../../components/commonComponents/DropdownTextBtn";
import InputField from "../../components/commonComponents/InputField";
import BtnWithAddIcon from "../../components/chefComponents/BtnWithAddIcon";
import TimeInputBtn from "../../components/chefComponents/TimeInputBtn";
import WeightVolumeInputBtn from "../../components/chefComponents/WeightVolumeInputBtn";
import UploadFileInputField from "../../components/commonComponents/UploadFileInputField";
import BtnGradientBorder from "../../components/commonComponents/BtnGradientBorder";
import FoodPictureSmall from "../../assets/food-pic-32px.png";

const StoreAvailability = () => {
  const [showItemsList, setShowItemsList] = useState(true);
  const [showAddNewFood, setShowAddNewFood] = useState(false);

  return (
    <div className='mx-auto mb-36 md:max-w-lg container'>
      {/* Title */}
      <div className='mt-14'>
        <h1 className='font-bold text-2xl text-center'>Store Availability update</h1>
      </div>

      {/* Sub Title */}
      <div className='mx-6 mt-12'>
        <p className='text-base'>Update availability</p>
        <p className='text-xl'>Current Items in Store (2)</p>
        <div onClick={() => setShowItemsList(!showItemsList)}>
          <DropdownTextBtn
            text={"Add Food Items to Store"}
            chevron={showItemsList ? "up" : "down"}
          />
        </div>
        {!!showItemsList && "hi"}
      </div>

      {/* Store Items List */}

      {/* Add New Items to Store */}
      <div className='space-y-2 mx-6 mt-12'>
        {/* Availability toggle */}
        <div onClick={() => setShowAddNewFood(!showAddNewFood)}>
          <DropdownTextBtn
            text={"Add Food Items to Store"}
            chevron={showAddNewFood ? "up" : "down"}
          />
        </div>
        {!!showAddNewFood && (
          <div className='space-y-2'>
            <DropdownBtn text={"Category Name"} />
            <InputField value={"Food Name"} type={"text"} />
            <InputField value={"Ingredient 1"} type={"text"} />
            <InputField value={"Ingredient 2"} type={"text"} />
            <BtnWithAddIcon text={"Add Ingredient"} />
            <TimeInputBtn text={"Preparation time"} />
            <div>
              <WeightVolumeInputBtn />
              <DropdownBtn text={"Unit"} />
            </div>
            <InputField value={"Price per item"} type={"text"} />
            <UploadFileInputField
              value={"Upload Food Images"}
              type={"file"}
              imgSrc={FoodPictureSmall}
            />
            <div className='block my-4 text-right'>
              <BtnGradientBorder value={"Add Food Item"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default StoreAvailability;
