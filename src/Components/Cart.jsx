import React from 'react'
import {Container}  from './Styles/Container.styles'
import styled from 'styled-components'
import {useDispatch,useSelector} from 'react-redux'
import {removetoCart} from '../Redux/Carts/Action'
const Cart =()=>{
 const dispatch=useDispatch()
 const state=useSelector((state)=>state.cart.cartItems)
 console.log(state)
    return(
        <>
        <Container width='100%'>
        <h2>Cart items </h2>
          <MainContainer>
         {state}
          {/* <button onClick={()=>(dispatch(removetoCart()))}>Remove</button> */}
          </MainContainer>
         </Container>
        </>
    )
}





const MainContainer=styled.div`
  display:block;
  justify-content:space-between;
  
`


export default  Cart;