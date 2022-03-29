import { combineReducers } from "redux";
import cartReducer from "./Carts/Reducer";
import productReducer from "./Product/Reducer";
const Rootreducer = combineReducers({
  cart: cartReducer,
  productsState: productReducer,
});

export default Rootreducer;
