import "./App.css";
import { Routes, Route } from "react-router-dom";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ChefOrders from "./pages/chefPages/ChefOrders";
import ChefChatSupport from "./pages/chefPages/ChefChatSupport";
import StoreAvailability from "./pages/chefPages/StoreAvailability";
import YourEarnings from "./pages/chefPages/YourEarnings";
import ChefSettings from "./pages/chefPages/ChefSettings";
import CustomerSettings from "./pages/customerPages/CustomerSettings";
import ChefStore from "./pages/customerPages/ChefStore";
import CustomerChatSupport from "./pages/customerPages/CustomerChatSupport";
import FavoriteFood from "./pages/customerPages/FavoriteFood";
import CustomerOrderBag from "./pages/customerPages/CustomerOrderBag";

function App() {
  const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  const active = activeNavCus[4];

  // const activeNavChef = ["chat", "availability", "orders", "earnings", "settings"];
  // const active = activeNavChef[3];

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light select-none'>
      {/* // NavBar */}
      {/* <ChefNavBar active={active} /> */}
      <CustomerNavBar active={active} />

      {/* // Routes declarations */}
      <Routes>
        {/* // Chef NavBar */}
        <Route path='/chat-chef' element={<ChefChatSupport />} />
        <Route path='/availability' element={<StoreAvailability />} />
        <Route path='/home-chef' element={<ChefOrders />} />
        <Route path='/earnings' element={<YourEarnings />} />
        <Route path='/settings-chef' element={<ChefSettings />} />

        {/* // Customer NavBar */}
        <Route path='/home-customer' element={<ChefStore />} />
        <Route path='/chat-customer' element={<CustomerChatSupport />} />
        <Route path='/favorites' element={<FavoriteFood />} />
        <Route path='/bag' element={<CustomerOrderBag />} />
        <Route path='/settings-customer' element={<CustomerSettings />} />
      </Routes>
    </div>
  );
}

export default App;
