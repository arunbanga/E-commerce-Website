import * as actionTypes from "./Types";
const initialState={
     cartItems:[],
}

const reducer =(state=initialState,action )=>{
    switch(action.type){
    case actionTypes.ADD_TO_CART:
        const ItemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
        if(ItemIndex >=0){
            state.cartItems[ItemIndex].qty+=1
        }else{
            const temp = {...action.payload,qty:1}
          return{
                ...state,
                cartItems:[...state.cartItems,temp]
            }
        }
case actionTypes.REMOVE_TO_CART:
    const data = state.cartItems.filter((val)=>val.id!==action.payload);
       return{ 
            ...state,
            cartItems:data
        }
    
    default:
        return state;
    }
}
export default reducer;