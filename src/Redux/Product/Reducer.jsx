import * as actionTypes from "./Types";
import { data } from "../../Components/Data";

const initialState = {
  products: [...data],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state.products,
      };
    default:
      return state;
  }
};

export default reducer;
