import { REGISTER_SUCCESS, REGISTER_FAIL, AUTHENTICATE_USER } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTHENTICATE_USER:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    default:
      return state;
  }
};

export default authReducer;
