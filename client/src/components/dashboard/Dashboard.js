import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getData } from "../../actions/getData";
import Navbar from "../layout/Navbar";
import VerticalBar from "./dash_components/MainExpenses";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isAuthenticated: auth,
    loading,
    name,
    // expenses,
  } = useSelector((state) => state.authReducer);

  const {
    categories, 
    expenses
  } = useSelector((state) => state.userDataReducer)

  useEffect(() => {
    
    //default query parameters are 1w and all
    dispatch(getData("1w", "all"));
    // return () => {
    //   cleanup
    // }
  },[]);
  

  return (
    <Fragment>
      <Navbar />

      <div className='mt-12 md:mx-8 '>
        <div className='py-4'>{`Welcome ${name} `}</div>
        <div className='grid grid-rows-4 gap-12 md:grid-cols-2'>
          <div className='md:w-full bg-gray h-48 md:h-72'>
            <VerticalBar />
          </div>
          {/* <div className='w-full bg-gray h-48 md:h-72'>Sample</div> */}
          {/* <div className='w-full bg-gray'>Sample</div>
            <div className='w-full bg-gray'>Sample</div> */}
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
