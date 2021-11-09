import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {authenticateUser} from "../../../actions/auth"

const Dashboard = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticateUser())
    // return () => {
    //   cleanup
    // }
  }, [])
  const auth = useSelector((state) => state.authReducer.isAuthenticated);

  return <div>{auth ? "dashboard" : "not authenticated"}</div>;
};

export default Dashboard;
