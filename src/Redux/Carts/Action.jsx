import * as action from './Types'

export const addtoCart=(id,title,image,price,qty)=>{
    return{
        type:action.ADD_TO_CART,
         payload:{
             id,title,image,price,qty
         }
    }
}
    export const removetoCart=(id)=>{
        return{
            type:action.REMOVE_TO_CART,
            payload:id
        }
    }
   export const Decrement=(item)=>{
       return{
           type:action.DECREMENT,
           payload:item
       }
   } 
   export const increment=(id)=>{
    return{
        type:action.INCREMENT,
        payload:id
    }
} 

