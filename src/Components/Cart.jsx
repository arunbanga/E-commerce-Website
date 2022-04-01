import React from 'react'
import {Container}  from './Styles/Container.styles'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {removetoCart} from '../Redux/Carts/Action'
const Cart =()=>{
 const dispatch=useDispatch()
    return(
        <>
       <Container width='100%' display='flex'>
         <MainContainer>
           <h2>Cart items </h2>
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