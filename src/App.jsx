import "./App.css";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import CustomerSettings from "./pages/customerPages/CustomerSettings";

function App() {
  const activeNav = ["home", "chat", "favorites", "bag", "settings"];
  const active = activeNav[4];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <CustomerSettings />
      <CustomerNavBar active={active} />
    </div>
  );
}

export default App;
