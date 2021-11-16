import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alert from "./alert";
import userDataReducer from "./userData";

//root reducer

export default combineReducers({
  authReducer,
  alert,
  userDataReducer,
});
