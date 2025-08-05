import FeatherIcon from "feather-icons-react";

const BtnTransparentWithIcon = ({ text }) => {
  return (
    <div>
      <div className='flex items-center gap-x-2 bg-brand-btn-dark px-6 py-2 border border-brand-primary rounded-lg font-semibold text-brand-primary text-base cursor-pointer'>
        <p>{text}</p>
        <FeatherIcon icon={text === "Filter" ? "filter" : "grid"} size='18' />
      </div>
    </div>
  );
};
export default BtnTransparentWithIcon;
