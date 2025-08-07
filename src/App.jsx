import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import CustomerPayment from "./pages/customerPages/CustomerPayment";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <CustomerPayment />
      <CustomerNavBar active={4} />
    </div>
  );
}

export default App;
