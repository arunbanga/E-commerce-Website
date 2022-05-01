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
     return state
     
  case actionTypes.REMOVE_TO_CART:
     const data=[...state.cartItems]
     const dataIndex=data.findIndex(val=>val.id===action.payload)
     if(dataIndex!==-1){
         data.splice(dataIndex,1)
         return {
             ...state,
             cartItems:data
         }
     }
    return state
    
    default:
        return state;
    }
}
export default reducer;