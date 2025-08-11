import "./App.css";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ChefOrders from "./pages/chefPages/ChefOrders";
import YourEarnings from "./pages/chefPages/YourEarnings";

function App() {
  // const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavCus[4];

  const activeNavChef = ["chat", "availability", "orders", "payout", "settings"];
  const active = activeNavChef[3];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light select-none'>
      <ChefOrders />
      {/* <YourEarnings /> */}
      {/* <CustomerNavBar active={active} /> */}
      <ChefNavBar active={active} />
    </div>
  );
}

export default App;
