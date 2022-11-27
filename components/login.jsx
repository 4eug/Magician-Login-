/* eslint-disable react/jsx-no-undef */
import React from 'react';

import LogoSizedImage from './utils/logo-sized-image';


const Login = () => {
  return (
<section className="">
    <div className="flex justify-center">
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-2/5">
        <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Login ✌🏽
                </h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                Get started with Magician.
                </p>

                <button
          className="outline-bordered flex justify-center items-center gap-3 mb-[16px]"
          onClick={() => {}}
        >
          <LogoSizedImage
            className="w-6 h-6 relative"
            src="/google-icon.svg"
            alt="google logo"
          />
          <div className="text-magician-sm">Continue with Google</div>
        </button>

        <button
          className="outline-bordered flex justify-center items-center gap-3 mb-[16px]"
          onClick={() => {}}
        >
          <LogoSizedImage
            className="w-6 h-6 relative"
            src="/google-icon.svg"
            alt="google logo"
          />
          <div className="text-magician-sm">Continue with Google</div>
        </button>

        <div className="mb-5" />
                
        <div className='relative w-magician-px-312 md:w-magician-px-368 flex py-2 items-center'>
          <div className='flex-grow border-t border-magician-gray-light-secondary'></div>
          <h6 className='flex-shrink mx-2 text-magician-purple-secondary'>or Sign in with Email</h6>
          <div className='flex-grow border-t w-210 border-magician-gray-light-secondary'></div>
        </div>

        <form className="w-magician-px-312 md:w-magician-px-368">

              <label className="self-center mb-[4px]">
                Email address
              </label>
              <input 
              id="email-address" 
              name="email" type="email"
               className="relative h-magician-px-56 w-magician-px-312 md:h-magician-px-56 md:w-magician-px-368 rounded-[8px] border border-magician-gray-light-secondary px-3 py-2" 
             
              />
              <div className="mb-4" />
              <label className="self-center mb-[4px]">
                Password
              </label>
              <input 
              id="email-address" 
              name="email" type="email"
               className="relative h-magician-px-56 w-magician-px-312 md:h-magician-px-56 md:w-magician-px-368 rounded-[8px] border border-magician-gray-light-secondary px-3 py-2" 
              
              />
              
              <div className="mb-5" />
              <button className="purple" type="submit">
                Continue
              </button>
            </form>

            </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-2/5">
            <img src="/Magician.png" alt="" />
        </div>
    </div>
</section>
  )
}

export default Login