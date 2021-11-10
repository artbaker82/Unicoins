import React from "react";
import { useNavigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.authReducer);
  console.log("pRIVATE ROUTE");
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? navigate("/login") : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
