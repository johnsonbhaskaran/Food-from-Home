import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import FoodItemPopup from "./pages/customerPages/FoodItemPopup";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <FoodItemPopup />
      <CustomerNavBar active={3} />
    </div>
  );
}

export default App;
