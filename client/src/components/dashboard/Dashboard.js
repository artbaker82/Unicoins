import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authenticateUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";
import VerticalBar from "./dash_components/MainExpenses";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isAuthenticated: auth,
    loading,
    name,
    expenses,
  } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(authenticateUser());
    // return () => {
    //   cleanup
    // }
  }, []);

  //sorts expenses by date, where should this be done?
  const sortByDate = expenses.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  // const getMilliseconds = expenses.map((expense) => {
  //   return new Date(expense.date).getTime();
  // });
  console.log(sortByDate);

  //show spinner if loading state = true
  return (
    <Fragment>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </Fragment>
  );
};

export default Dashboard;
