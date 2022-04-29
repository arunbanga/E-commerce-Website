import React from 'react'
import {Container}  from './Styles/Container.styles'
import styled from 'styled-components'
import Button from "@mui/material/Button";
import {useDispatch,useSelector} from 'react-redux'
import{removetoCart} from '../Redux/Carts/Action'
const Cart =()=>{
 const items=useSelector((state)=>state.cart.cartItems)
 console.log(items)
 const dispatch=useDispatch()

 const remove=(id)=>{
   dispatch(removetoCart(id))
   console.log(remove)
 }
    return(
        <>
        <Container width='100%'>
        <h2 style={{textAlign:'center',color:'#1e8bd4'}}>Cart Page </h2>
          <MainContainer>
          <RightContainer>

         
          <ul>
         {items.map((val)=>{
           return <li key={val.id} style={{color:'black',display:'flex',alignItems:'center',marginLeft:'10px' }}>
             <h4>{val.title}</h4>
             <img src={val.image} style={{width:'100px',height:'100px',margin:'10px'}} alt={val.title}/>
             <p>{val.price}</p>
             <div style={{marginLeft:'10px'}}>
             <label htmlFor='qty'> Qty: {val.qty}</label>
             <Button onClick={()=>remove(val.id)} style={{marginLeft:'10px'}} variant="contained"> Delete</Button>
            </div>
           </li>
           
         })}
        
        
         </ul>
         </RightContainer>
         <LeftContainer>
           
         </LeftContainer>
          {/* <button onClick={()=>(dispatch(removetoCart()))}>Remove</button> */}
          </MainContainer>
         
         </Container>
        </>
    )
}





const MainContainer=styled.div`
 width:100%;
  
`
const RightContainer=styled.div`
 display:flex;
 justify-content:flex-start;
 flex-direction:row;

  
`
const LeftContainer=styled.div`
  position:absolute;
  top:100px;
  right:100px;
`

export default  Cart;