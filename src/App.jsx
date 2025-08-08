import "./App.css";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import ChefAccountSettings from "./pages/chefPages/ChefAccountSettings";
// import CustomerNavBar from "./components/commonComponents/CustomerNavBar";

function App() {
  const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  const active = activeNavCus[4];

  // const activeNavChef = ["chat", "availability", "orders", "payout", "settings"];
  // const active = activeNavChef[4];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <ChefAccountSettings />
      {/* <CustomerNavBar active={active} /> */}
      <ChefNavBar active={active} />
    </div>
  );
}

export default App;
