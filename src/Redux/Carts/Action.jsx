import * as action from './Types'

export const addtoCart=(id,title,image,price)=>{
    return{
        type:action.ADD_TO_CART,
         payload:{
             id,title,image,price
         }
    }
}
    export const removetoCart=()=>{
        return{
            type:action.REMOVE_TO_CART,
             
        }
    }
