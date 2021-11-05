import axios from "axios";
//import alert action
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

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
