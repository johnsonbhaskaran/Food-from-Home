import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ChefNavBar from "./components/commonComponents/ChefNavBar";
import CustomerNavBar from "./components/commonComponents/CustomerNavBar";
import ChefOrders from "./pages/chefPages/ChefOrders";
import ChefLogin from "./pages/chefPages/ChefLogin";
import ChefSignup from "./pages/chefPages/ChefSignup";
import ChefChatSupport from "./pages/chefPages/ChefChatSupport";
import CustomerOnboarding_one from "./pages/commonPages/CustomerOnboarding_one";
import CustomerOnboarding_two from "./pages/commonPages/CustomerOnboarding_two";
import CustomerOnboarding_three from "./pages/commonPages/CustomerOnboarding_three";
import StoreAvailability from "./pages/chefPages/StoreAvailability";
import YourEarnings from "./pages/chefPages/YourEarnings";
import ChefSettings from "./pages/chefPages/ChefSettings";
import CustomerSettings from "./pages/customerPages/CustomerSettings";
import CustomerLogin from "./pages/customerPages/CustomerLogin";
import CustomerSignup from "./pages/customerPages/CustomerSignup";
import LocationHome from "./pages/customerPages/LocationHome";
import ChefStore from "./pages/customerPages/ChefStore";
import FoodItemPopup from "./pages/customerPages/FoodItemPopup";
import CustomerOrderBag from "./pages/customerPages/CustomerOrderBag";
import CustomerChatSupport from "./pages/customerPages/CustomerChatSupport";
import FavoriteFood from "./pages/customerPages/FavoriteFood";
import Checkout from "./pages/customerPages/Checkout";
import CustomerPayment from "./pages/customerPages/CustomerPayment";
import CustomerPaymentSuccessfulPopup from "./pages/customerPages/CustomerPaymentSuccessfulPopup";

function App() {
  // const activeNavCus = ["home", "chat", "favorites", "bag", "settings"];
  // const active = activeNavCus[4];

  // const activeNavChef = ["chat", "availability", "orders", "earnings", "settings"];
  // const active = activeNavChef[3];

  const appState = {
    customerFlow: false,
    chefFlow: false,
    customerLoggedIn: false,
    chefLoggedIn: false,
  };

  console.log(appState);

  return (
    <div className='bg-brand-bg-dark font-urbanist text-brand-text-light select-none'>
      {/* // NavBar */}
      {/* <ChefNavBar active={active} /> */}

      {appState.chefFlow && <ChefLogin />}
      {appState.customerFlow && <CustomerOnboarding_one />}

      {appState.customerLoggedIn && <CustomerNavBar />}
      {appState.chefLoggedIn && <ChefNavBar />}

      {/* // Routes declarations */}
      <Routes>
        {/* // Default home - customer - Onboarding
        // Default home - chef - Login */}
        <Route path='/' element={<Navigate to='/onboarding' replace />} />

        {/* // Chef NavBar */}
        <Route path='/chat-chef' element={<ChefChatSupport />} />
        <Route path='/availability' element={<StoreAvailability />} />
        <Route path='/home-chef' element={<ChefOrders />} />
        <Route path='/earnings' element={<YourEarnings />} />
        <Route path='/settings-chef' element={<ChefSettings />} />

        {/* // Customer NavBar */}
        <Route path='/customer/store' element={<ChefStore />} />
        <Route path='/customer/chat' element={<CustomerChatSupport />} />
        <Route path='/favorites' element={<FavoriteFood />} />
        <Route path='/bag' element={<CustomerOrderBag />} />
        <Route path='/settings-customer' element={<CustomerSettings />} />

        {/* // Chef flow */}
        <Route path='/chef/login' element={<ChefLogin />} />
        <Route path='/chef/signup' element={<ChefSignup />} />

        {/* // Customer flow */}
        <Route path='/onboarding' element={<CustomerOnboarding_one />} />
        <Route path='/onboarding/2' element={<CustomerOnboarding_two />} />
        <Route path='/onboarding/3' element={<CustomerOnboarding_three />} />
        <Route path='/customer/login' element={<CustomerLogin />} />
        <Route path='/customer/signup' element={<CustomerSignup />} />
        <Route path='/customer/location' element={<LocationHome />} />
        <Route path='/customer/store' element={<ChefStore />} />
        <Route path='/customer/foodItem' element={<FoodItemPopup />} />
        <Route path='/customer/orderBag' element={<CustomerOrderBag />} />
        <Route path='/customer/checkout' element={<Checkout />} />
        <Route path='/customer/payment' element={<CustomerPayment />} />
        <Route path='/customer/payment/successful' element={<CustomerPaymentSuccessfulPopup />} />
      </Routes>
    </div>
  );
}

export default App;
