import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";

const DynamicBtnField = ({ children }) => {
  const [show, setShow] = useState(true);
  const [quantity, setQuantity] = useState(children);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [show]);

  useEffect(() => {
    if (quantity < 2) {
      setShow(false);
      setQuantity(1);
    }
  }, [quantity]);

  return (
    <div onClick={() => setShow(true)} className='select-none'>
      {show ? (
        <div className='flex items-center border border-brand-text-dark rounded min-w-max h-8'>
          <div className='flex items-center px-2'>
            <FeatherIcon
              onClick={() => setQuantity((quantity) => quantity - 1)}
              icon='minus'
              color=''
              className='rounded-full size-6 bg-brand-text-dark'
            />
            <div className='flex justify-center items-center size-8'>{quantity}</div>
            <FeatherIcon
              onClick={() => setQuantity((quantity) => quantity + 1)}
              icon='plus'
              color=''
              className='rounded-full size-6 bg-brand-text-dark'
            />
          </div>
        </div>
      ) : (
        <button className='border border-brand-text-dark rounded size-8'>{quantity}</button>
      )}
    </div>
  );
};
export default DynamicBtnField;
