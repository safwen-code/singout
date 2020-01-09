import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import reducerdocuments from'./reducerdocuments'
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  reducerdocuments
});