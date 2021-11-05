import React from "react";

const Register = () => {
  return (
    <section className='bg-blue md:bg-gold relative h-screen'>
      <div className='hidden md:block absolute inset-0 bg-blue h-screen md:w-1/3'></div>
      <section className='container p-4 mx-auto md:flex'>
        <div className='text-center md:mt-4 md:w-1/3 md:text-left relative'>
          <h2 className='text-grey-400 text-5xl md:hidden relative'>Register</h2>
          <h2 className='text-white-dark text-5xl hidden md:inline-flex md:leading-normal relative'>
            Register for your free account today!
          </h2>
        </div>

        <div className='md:w-2/3'>
          <form className='mt-4 text-right lg:text-center'>
            <input
              className='register-item'
              type='text'
              name='firstName'
              placeholder='First Name'
            />
            <input className='register-item' type='text' name='lastName' placeholder='Last Name' />
            <input className='register-item' type='text' name='firstName' placeholder='Email' />
            <input
              className='register-item'
              type='password'
              name='firstName'
              placeholder='Password'
            />
            <input
              className='register-item'
              type='password'
              name='firstName'
              placeholder='Confirm Password'
            />
            <input
              className='register-item bg-yellow-300 text-indigo-500 text-lg md:bg-blue md:text-white'
              type='submit'
              value='Get Started'
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Register;
