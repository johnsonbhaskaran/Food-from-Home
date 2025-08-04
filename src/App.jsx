import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import CustomerAccountSettings from "./pages/customerPages/CustomerAccountSettings";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <CustomerAccountSettings />
      <CustomerNavBar active={3} />
    </div>
  );
}

export default App;
