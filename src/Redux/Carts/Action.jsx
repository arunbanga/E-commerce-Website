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
export const adjustQty =(id,title,image,price,value)=>{
    return{
        type:action.ADJUST_QTY,
        payload:{
            id,title,image,price,
            qty:value
        }
    }
}
