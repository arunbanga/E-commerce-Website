import React from 'react'
import {Container}  from './Styles/Container.styles'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {removetoCart} from '../Redux/Carts/Action'
const Cart =({products})=>{
 const dispatch=useDispatch()
 const state=useSelector((state)=>state.cart.cartItems)
    return(
        <>
        <Container width='100%' display='flex'>
         <MainContainer>
           <h2>Cart items </h2>
           {/* {products.map((val)=>{
             <h1>{val.title}</h1>
           })} */}
           <button onClick={()=>(dispatch(removetoCart()))}>Remove</button>
           
           
         </MainContainer>
       </Container>
        </>
    )
}





const MainContainer=styled.div`
  width:100%;
  text-align:center;
`

export default  Cart;