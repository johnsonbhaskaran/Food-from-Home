import React from "react";

const BtnCTA = (props) => {
  return (
    <button
      type='button'
      className='px-12 py-4 text-pink-500 font-semibold border border-pink-500 rounded-xl mt-4 bg-pink-100 '
    >
      {props.name}
    </button>
  );
};

export default BtnCTA;
