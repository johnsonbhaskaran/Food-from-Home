import "./App.css";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
// import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import PayoutSettledPopup from "./pages/chefPages/PayoutSettledPopup";

function App() {
  const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  const active = activeNavCus[4];

  // const activeNavChef = ["chat", "availability", "orders", "payout", "settings"];
  // const active = activeNavChef[4];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <PayoutSettledPopup />
      <ChefNavBar active={active} />
      {/* <CustomerNavBar active={active} /> */}
    </div>
  );
}

export default App;
