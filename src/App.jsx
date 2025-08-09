import "./App.css";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import StoreAvailability from "./pages/chefPages/StoreAvailability";
// import CustomerNavBar from "./components/commonComponents/CustomerNavBar";

function App() {
  // const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavCus[4];

  const activeNavChef = ["chat", "availability", "orders", "payout", "settings"];
  const active = activeNavChef[1];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <StoreAvailability />
      {/* <CustomerNavBar active={active} /> */}
      <ChefNavBar active={active} />
    </div>
  );
}

export default App;
