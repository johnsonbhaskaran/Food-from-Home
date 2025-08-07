import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";

const DynamicBtnField = ({ children }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(children);

  useEffect(() => {}, [quantity]);

  return (
    <div onClick={() => setShow(true)} className='select-none'>
      {show ? (
        <div className='flex items-center border border-b-brand-text-dark rounded min-w-max h-8'>
          <div className='flex items-center gap-2 px-2'>
            <FeatherIcon
              onClick={() => setQuantity((quantity) => quantity - 1)}
              icon='minus'
              color=''
              className='rounded-full size-6 bg-brand-text-dark'
            />
            {quantity}
            <FeatherIcon
              onClick={() => setQuantity((quantity) => quantity + 1)}
              icon='plus'
              color=''
              className='rounded-full size-6 bg-brand-text-dark'
            />
          </div>
          <div className='px-2'>
            <FeatherIcon onClick={() => setQuantity(0)} icon='trash' />
          </div>
        </div>
      ) : (
        <button className='border border-b-brand-text-dark rounded size-8'>{quantity}</button>
      )}
    </div>
  );
};
export default DynamicBtnField;
