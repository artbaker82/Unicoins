import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const Landing = () => {
  return (
    <section className='bg-unicorn h-screen bg-no-repeat bg-cover bg-center'>
      <div className='md:mx-40'>
        <header>
          <div>
            <h1
              className='
              pt-28
              text-center
              md:text-left
              tracking-wide
              text-gold text-5xl
              md:text-7xl
              font-bold
            '>
              Unicoins
            </h1>
            <h4 className='mt-10 text-lg md:text-2xl text-white-dark text-center md:text-left'>
              Simplify your finances
            </h4>
          </div>
        </header>
        <div className='my-48 text-center md:text-left'>
          <Link
            to='/register'
            className='w-15 pl-4 pr-4 p-2 text-white rounded-full bg-cover bg-blue'>
            Register
          </Link>
          <Link
            to='/login'
            className='ml-5 w-15 pl-4 pr-4 p-2 text-white rounded-full bg-cover bg-blue'>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
