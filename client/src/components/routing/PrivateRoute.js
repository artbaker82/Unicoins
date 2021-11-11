import { Navigate, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authenticateUser } from "../../actions/auth";
import Spinner from "../layout/Spinner";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { isAuthenticated: auth, loading } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(authenticateUser());
  }, []);

  // return auth ? children : <Navigate to='/login' />;

  return loading ? <Spinner /> : auth ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
