import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ToggleSwitch from "./components/commonComponents/ToggleSwitch";
import ChefStore from "./pages/customerPages/ChefStore";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      {/* <ChefStore /> */}
      <ToggleSwitch isDark />
      {/* <CustomerNavBar active={1} /> */}
    </div>
  );
}

export default App;
