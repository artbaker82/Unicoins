import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authenticateUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";
import Navbar from "../layout/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated: auth, loading } = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(authenticateUser());
    // return () => {
    //   cleanup
    // }
  }, []);

  //show spinner if loading state = true
  return (
    <Fragment>
      <Navbar />
      {loading ? (
        <Spinner />
      ) : (
        <div className='mt-12'>{auth ? "Dashboard" : "not authenticated"}</div>
      )}
    </Fragment>
  );
};

export default Dashboard;
