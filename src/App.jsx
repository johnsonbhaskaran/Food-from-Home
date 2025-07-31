import "./App.css";
import FeatherIcon from "feather-icons-react";
import ToggleIconContainer from "./ToggleIconContainer";

function App() {
  return (
    <div className='bg-[#0E0A0F]'>
      <h1 className='text-6xl'>Tittle</h1>
      <FeatherIcon icon='copy' size='240' />
      <FeatherIcon icon='heart' fill='red' size='240' />
      <ToggleIconContainer />
    </div>
  );
}

export default App;
