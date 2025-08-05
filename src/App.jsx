import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import FavoriteFood from "./pages/customerPages/FavoriteFood";

function App() {
  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <FavoriteFood />
      <CustomerNavBar active={3} />
    </div>
  );
}

export default App;
