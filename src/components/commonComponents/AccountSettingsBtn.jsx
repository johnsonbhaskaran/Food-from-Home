import FeatherIcon from "feather-icons-react";

const AccountSettingsBtn = () => {
  return (
    <button className='flex justify-between items-center gap-2 px-5 py-4 rounded-lg w-xs bg-brand-text-dark'>
      <div className='border text-left grow'>Account Settings</div>
      <FeatherIcon icon='chevron-down' />
    </button>
  );
};
export default AccountSettingsBtn;
