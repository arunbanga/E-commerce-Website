import React from 'react'
import {Container}  from './Styles/Container.styles'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {addtoCart} from '../Redux/Carts/Action'
import {useSelector} from 'react-redux'
const Cart =(props)=>{
  const cartItems=useSelector((state)=>state.cartItems)
    return(
        <>
       <Container width='100%' display='flex'>
         <MainContainer>
           <h2>Cart items   </h2>
          
           
         </MainContainer>
       </Container>
        </>
    )
}





const MainContainer=styled.div`
  width:100%;
  text-align:center;
`
const mapStateToProps= state=>{
    return{
      cartItems:state.cartItems
    }
}
const mapDispatchToProps=dispatch=>{
  return{
    addtocart:()=>dispatch(addtoCart())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Cart)