import * as actionTypes from "./Types";
const initialState = {
  cartItems: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const ItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.cartItems[ItemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          cartItems: [...state.cartItems, temp]
        };
      }
      return state;

    case actionTypes.REMOVE_TO_CART:
      const data = [...state.cartItems];
      const dataIndex = data.findIndex(val => val.id === action.payload);
      if (dataIndex !== -1) {
        data.splice(dataIndex, 1);
        return {
          ...state,
          cartItems: data
        };
      }
      return state;

    case actionTypes.DECREMENT:
      const ItemIndexdec = state.cartItems.findIndex(
        items => items.id === action.payload.id
      );

      if (state.cartItems[ItemIndexdec].qty >= 2) {
        const delitem = (state.cartItems[ItemIndexdec].qty -= 1);
        console.log([...state.cartItems, delitem]);
      }
      return {
        ...state,
        cartItems: [...state.cartItems]
      };
    case actionTypes.INCREMENT:
      const ItemIndexinc = state.cartItems.findIndex(
        items => items.id === action.payload
      );

      if (state.cartItems[ItemIndexinc].qty >= 1) {
        const delitem = (state.cartItems[ItemIndexinc].qty += 1);
        console.log([...state.cartItems, delitem]);
      }
      return {
        ...state,
        cartItems: [...state.cartItems]
      };

    default:
      return state;
  }
};
export default reducer;
