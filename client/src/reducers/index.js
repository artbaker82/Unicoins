import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alert from "./alert";

//root reducer

export default combineReducers({
  authReducer,
  alert,
});
