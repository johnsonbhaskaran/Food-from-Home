import React from "react";

const Login = () => {
  return (
    <div className='flex w-full h-screen bg-slate-300'>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <div>
          <h1>Welcome Back</h1>
          <p>Please enter your details</p>
          <div>
            <div>
              <label htmlFor=''>Email</label>
              <input
                className=''
                placeholder='Enter your email'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:w-1/2 bg-amber-300 md:flex items-center justify-center'>
        Graphic image goes here
      </div>
    </div>
  );
};

export default Login;
