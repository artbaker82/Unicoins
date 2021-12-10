import axios from "axios";
import { setAlert } from "./alert";
import { LOAD_DATA } from "./types";

import setAuthToken from "../utils/setAuthToken";

export const getData = (time, category) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  //format query parameters to be passed to API
  let sortDate = "";
  let categoryParam = "";
  let queryParam = ``;
  if (time) {
    sortDate = `sortDate=${time}`;
    queryParam += `?${sortDate}`;
  }
  if (category) {
    categoryParam = `category=${category}`;
    queryParam += `&${categoryParam}`;
  }

  //?sortDate=1w&category=food

  try {
    //time and category parameters will be passed as request params to communicate with api how to sort the data
    const res = await axios.get(`http://localhost:5000/api/v1/user/expense${queryParam}`);
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
