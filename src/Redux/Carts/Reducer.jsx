const initialState={
     cartItems:[10],
}

const reducer=(state=initialState,action )=>{
    switch(action.type){
    case action.ADD_TO_CART:
        const _products=[...state.cartItems]
        _products.push(action.payload)
            return{
                cartItems:_products
            };
    default:
        return state;
    }
}
export default reducer;