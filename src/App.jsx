import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import CustomerOrderBag from "./pages/customerPages/CustomerOrderBag";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <CustomerOrderBag />
      <CustomerNavBar active={4} />
    </div>
  );
}

export default App;
