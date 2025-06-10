import React from "react";

const Login = () => {
  return (
    <div className='flex w-full h-screen bg-slate-300'>
      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
          <h1 className='text-5xl font-semibold'>Welcome Back</h1>
          <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details</p>
          <div className='mt-6'>
            <div>
              <label
                className='text-lg font-medium'
                htmlFor=''
              >
                Email
              </label>
              <input
                className='w-full border-2 border-slate-300 rounded-xl p-4 mt-1'
                placeholder='Enter your email'
                type='text'
              />
            </div>
            <div>
              <label
                className='text-lg font-medium'
                htmlFor=''
              >
                Password
              </label>
              <input
                className='w-full border-2 border-slate-300 rounded-xl p-4 mt-1'
                placeholder='Enter your password'
                type='password'
              />
            </div>
            <div className='flex mt-6 justify-between items-center'>
              <div>
                <input
                  type='checkbox'
                  id='remember'
                />
                <label
                  className='ml-2 font-medium text-base'
                  htmlFor='remember'
                >
                  Remember for 30 days
                </label>
              </div>
              <button className='font-medium text-base text-violet-500'>Forgot password</button>
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='py-4 rounded-xl bg-violet-500 text-white text-lg font-bold'>
                Sign in
              </button>
              <button className=''>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:w-1/2 bg-amber-300 md:flex items-center justify-center text-2xl font-semibold'>
        Graphic image goes here
      </div>
    </div>
  );
};

export default Login;
