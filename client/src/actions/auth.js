import axios from "axios";
//import alert action
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTHENTICATE_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "./types";

import setAuthToken from "../utils/setAuthToken";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", body, config);

      //take token dispatch to authReducer
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
    }
  };

export const register =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const userName = `${firstName} ${lastName}`;
    const body = JSON.stringify({ name: userName, email, password });

    try {
      const res = await axios.post("http://localhost:5000/api/v1/user/register", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      //dispatch alert with errors
      // dispatch register fail action
    }
  };

export const authenticateUser = () => async (dispatch) => {
  //   const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("http://localhost:5000/api/v1/auth/getAuth");
    if (res.data) {
      dispatch({
        type: AUTHENTICATE_USER,
        payload: res.data,
      });
    } else {
      //AUTHENTICATE_FAILED
    }
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
};
