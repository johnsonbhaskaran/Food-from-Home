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
      <ChefStore />
      <CustomerNavBar active={1} />
    </div>
  );
}

export default App;
