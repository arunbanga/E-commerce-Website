import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components'
const Checkout=()=>{
  const items = useSelector(state => state.cart.cartItems);
  return(
      <>
      <MainContainer>
      <CenterContainer>
       <div>
       <h4 style={{paddingLeft:'10px'}}>Image</h4>
       <h4>Products Name</h4>
       <h4>Quantity</h4>
       <h4>Price</h4>
       </div>
      </CenterContainer>
    <RightContainer>

      <div>
        {items.map((val)=>{
          return(
            <div className='list'>
              <img src={val.image} className='image' alt={val.title}/>
              <h4 className='title'>{val.title}</h4>
              <h4 className='qty'>{val.qty}</h4>
              <h4 className='price'>{val.price}</h4>
             
            </div>
            
          )
        })}
      </div>
      
      </RightContainer>
      <Footer>
      <p>Your Order has been Placed Successfully .</p>
      </Footer>
      </MainContainer>
      </>

  )
}
const MainContainer=styled.div`
width:100%;
height:100%;
display:block;
`
const CenterContainer=styled.div`
div{
  width:38%;
  display:flex;
  margin-left:10px;
  justify-content:space-between;
}

`

const RightContainer =styled.div`
div{
  width:61%;
  display:block;
  margin-left:5px;
  justify-content:space-between;
}

.list{
  display:flex;
  margin-top:5px;
  
}
.image{
  width:50px;
  height:60px;
}

`
const Footer = styled.div`
width:100%;
position:absolute;
display:flex;
margin-left:10px;
position:absolute;
justify-content:center;
left:10px;
bottom:0px;
color:green;
font-weight:bold;


`

export default  Checkout;