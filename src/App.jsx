import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ChefOrders from "./pages/chefPages/ChefOrders";
import ChefChatSupport from "./pages/chefPages/ChefChatSupport";
import StoreAvailability from "./pages/chefPages/StoreAvailability";
import YourEarnings from "./pages/chefPages/YourEarnings";
import ChefSettings from "./pages/chefPages/ChefSettings";

function App() {
  // const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavCus[4];

  const activeNavChef = ["chat", "availability", "orders", "payout", "settings"];
  const active = activeNavChef[3];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light select-none'>
      {/* // NavBar */}
      <ChefNavBar active={active} />

      {/* // Routes declarations */}
      <Routes>
        {/* // Chef NavBar */}
        <Route path='/chat-chef' element={<ChefChatSupport />} />
        <Route path='/store-availability' element={<StoreAvailability />} />
        <Route path='/' element={<ChefOrders />} />
        <Route path='/earnings' element={<YourEarnings />} />
        <Route path='/settings-chef' element={<ChefSettings />} />
      </Routes>

      {/* <CustomerNavBar active={active} /> */}
    </div>
  );
}

export default App;
