import { combineReducers } from "redux";
import CartReducer from "./cartReducer";
import LoginReducer from "./LoginReducer";

const rootReducer = combineReducers({
  loginReducer: LoginReducer,
  cartReducer: CartReducer
});

export default rootReducer;