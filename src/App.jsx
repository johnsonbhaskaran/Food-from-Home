import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import FoodItemCardMax from "./components/commonComponents/FoodItemCardMax";
import ChefStore from "./pages/customerPages/ChefStore";

import FoodItemImageMax_1 from "./assets/Food-img-1-max.png";
import BtnTransparent from "./components/commonComponents/BtnTransparent";
import BtnGradientFilled from "./components/commonComponents/BtnGradientFilled";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <FoodItemCardMax imgSrc={FoodItemImageMax_1}>
        <h3 className='font-extrabold text-white text-3xl'>Fish Fry</h3>
        <div className='flex justify-between'>
          <BtnTransparent text={"₹ 150 / pcs"} />
          <BtnGradientFilled value={"Add now"} />
        </div>
      </FoodItemCardMax>
      {/* <ChefStore />
      <CustomerNavBar active={1} /> */}
    </div>
  );
}

export default App;
