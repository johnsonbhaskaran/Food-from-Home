import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import CustomerPaymentSuccessfulPopup from "./pages/customerPages/CustomerPaymentSuccessfulPopup";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <CustomerPaymentSuccessfulPopup />
      <CustomerNavBar active={4} />
    </div>
  );
}

export default App;
