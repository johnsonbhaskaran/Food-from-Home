import "./App.css";
import CustomerOnboarding_one from "./pages/commonPages/CustomerOnboarding_one.jsx";
import CustomerOnboarding_two from "./pages/commonPages/CustomerOnboarding_two.jsx";
import CustomerOnboarding_three from "./pages/commonPages/CustomerOnboarding_three.jsx";

function App() {
  return (
    <div className='bg-[#0E0A0F] font-urbanist'>
      <CustomerOnboarding_one />
      <CustomerOnboarding_two />
      <CustomerOnboarding_three />
    </div>
  );
}

export default App;
