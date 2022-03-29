import * as action from './Types'

export const addtoCart=(title)=>{
    return{
        type:action.ADD_TO_CART,
         payload:{
             id:title
         }
    }
}