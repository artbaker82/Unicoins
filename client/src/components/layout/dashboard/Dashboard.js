import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const auth = useSelector((state) => state.authReducer.isAuthenticated);

  return <div>{auth ? "dashboard" : "not authenticated"}</div>;
};

export default Dashboard;
