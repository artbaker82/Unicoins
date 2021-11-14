import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    //logo goes to dashboard, logout triggers logout action
    <div className='flex top-0 fixed h-12 w-screen bg-blue z-10 items-center justify-between'>
      <div className='md:mx-40 hidden md:block flex-1'>
        <button className='bg-yellow p-1'>Unicoins</button>
      </div>

      <div className='flex-1 flex justify-end md:mx-40 mx-10'>
        <button className='bg-yellow p-1' onClick={(e) => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
