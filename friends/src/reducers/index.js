import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import fetchDataReducer from "./fetchDataReducer";

export default combineReducers({
  loginReducer,
  fetchDataReducer
});
