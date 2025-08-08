import { useState } from "react";
import SidebarDropdownBtn from "../../components/commonComponents/SidebarDropdownBtn";
import AccountSettingsBtn from "../../components/commonComponents/AccountSettingsBtn";
import ThemeSelectionBtn from "../../components/commonComponents/ThemeSelectionBtn";
import LogoutBtn from "../../components/commonComponents/LogoutBtn";

const CustomerSettings = () => {
  const [show, setShow] = useState(true);

  return (
    <div className='flex flex-row justify-end items-stretch h-screen'>
      <div onClick={() => setShow(show)} className='flex flex-col bg-brand-fore-dark'>
        {show && (
          <div className='flex flex-col space-y-4 m-2 mt-16'>
            <LogoutBtn />
            <ThemeSelectionBtn />
            <AccountSettingsBtn />
            <SidebarDropdownBtn />
          </div>
        )}
      </div>
    </div>
  );
};
export default CustomerSettings;
