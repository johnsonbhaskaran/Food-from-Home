import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import Checkout from "./pages/customerPages/Checkout";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <Checkout />
      <CustomerNavBar active={4} />
    </div>
  );
}

export default App;
