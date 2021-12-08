import axios from "axios";
import { setAlert } from "./alert";
import { LOAD_DATA } from "./types";

import setAuthToken from "../utils/setAuthToken";

export const getData =
  ({ time, category }) =>
  async (dispatch) => {
    
    try {
      //format query parameters to be passed to API
      //time and category parameters will be passed as request params to communicate with api how to sort the data
      const res = await axios.get("http://localhost:5000/api/v1/user/expense");
      dispatch({
        type: LOAD_DATA,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };
