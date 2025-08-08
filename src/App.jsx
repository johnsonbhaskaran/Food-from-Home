import "./App.css";
// import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ChefChatSupport from "./pages/chefPages/ChefChatSupport";

function App() {
  // const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavCus[4];

  // const activeNavChef = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavChef[4];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light'>
      <ChefChatSupport />
      {/* <CustomerNavBar active={active} /> */}
    </div>
  );
}

export default App;
