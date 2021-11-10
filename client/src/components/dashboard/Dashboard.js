import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authenticateUser());
    // return () => {
    //   cleanup
    // }
  }, []);
  const auth = useSelector((state) => state.authReducer.isAuthenticated);
  const loading = useSelector((state) => state.authReducer.loading);
  //show spinner if loading state = true
  return (
    <Fragment>
      {loading ? <Spinner /> : <Fragment>{auth ? "Dashboard" : "not authenticated"}</Fragment>}
    </Fragment>
  );
};

export default Dashboard;
