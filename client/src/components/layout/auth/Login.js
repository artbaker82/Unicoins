import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    //setAlert action with message? Do this after server response (if err)

    dispatch(login({ email, password }));
  };

  //upon successful login, user will be redirected to dashboard
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <section className='bg-blue md:bg-gold relative'>
      <div className='hidden md:block absolute inset-0 bg-blue h-screen md:w-1/3'></div>
      <section className='container p-4 mx-auto md:flex'>
        <div className='text-center md:mt-4 md:w-1/3 md:text-left relative'>
          <h2 className='text-grey-400 text-5xl md:hidden relative'>Login</h2>
          <h2 className='text-white-dark text-5xl hidden md:inline-flex md:leading-normal relative'>
            Login
          </h2>
        </div>

        <div className='md:w-2/3'>
          <form className='mt-4 text-right lg:text-center h-screen' onSubmit={(e) => onSubmit(e)}>
            {/* <input
              className='register-item'
              type='text'
              name='firstName'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => onChange(e)}
            />
            <input
              className='register-item'
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => onChange(e)}
            /> */}
            <input
              className='register-item'
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              className='register-item'
              type='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => onChange(e)}
            />

            <input
              className='register-item bg-gold text-blue text-lg md:bg-blue md:text-white'
              type='submit'
              value='Login'
            />
          </form>
        </div>
      </section>
    </section>
  );
};

export default Register;
