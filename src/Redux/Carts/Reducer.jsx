

const InitailState={
    Products:[],
    Cart:[],
}

const Reducer=(state=InitailState,action )=>{
    switch(action.type){
    case action.ADD_TO_CART:
            return{
                ...state.card
            };
    default:
        return state;
    }
}
export default Reducer;