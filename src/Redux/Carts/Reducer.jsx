import * as actionTypes from "./Types";
const initialState={
     cartItems:[],
}

const reducer =(state=initialState,action )=>{
    switch(action.type){
    case actionTypes.ADD_TO_CART:
        const _products=[...state.cartItems]
        _products.push(action.payload.id)
            return{
                cartItems:_products
           
            }
    case actionTypes.REMOVE_TO_CART:
        console.warn('action')
         state.pop()
        return{ 
            ...state,
        }
    default:
        return state;
    }
}
export default reducer;