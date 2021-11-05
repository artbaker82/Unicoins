import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    if (password !== password2) {
      //setAlert action with message
      console.log("passwords do not match");
    } else {
      dispatch(register({ firstName, lastName, email, password }));
    }
  };

  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    navigate("/dashboard");
  }

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
          <form onSubmit={(e) => onSubmit(e)} className='mt-4 text-right lg:text-center'>
            <input
              className='register-item'
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => onChange(e)}
              placeholder='First Name'
            />
            <input
              className='register-item'
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => onChange(e)}
              placeholder='Last Name'
            />
            <input
              className='register-item'
              type='email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
              placeholder='Email'
            />
            <input
              className='register-item'
              type='password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              placeholder='Password'
            />
            <input
              className='register-item'
              type='password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
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
