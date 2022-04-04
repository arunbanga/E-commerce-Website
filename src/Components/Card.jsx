import React from "react";
import { Container } from "./Styles/Container.styles";
import { deviceMax, device } from "../Utilis/Device";
import Button from "@mui/material/Button";
import styled from "styled-components";
import {connect} from 'react-redux';
import {useDispatch,} from 'react-redux'
import {useState} from 'react'
import {addtoCart} from '../Redux/Carts/Action'
const Card = (props) => {
  const [cartBtn,setCartBtn] =useState('Buy NOw')
  const dispatch=useDispatch()
  const handleCart=()=>{
    if(cartBtn==='Buy Now'){
      setCartBtn('Add to cart')
      dispatch(addtoCart(props.title))
    }else{
      setCartBtn('Buy Now')
    }
  }
  return (
    <>
      <Container width="100%" display="flex" flexDirection="row">
        <CardContainer>
          <Image>
            <img
              src={props.image}
              className="images"
              style={{
                width: "125px",
                height: "120px"
              }}
            />
          </Image>

          <ContentContainer>
            <p>
              {props.title}
              <span style={{ display: "block", marginTop: "10px" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                assumenda voluptas rep...
              </span>
              <span
                className="span"
                style={{
                  display: "flex",
                  paddingTop: "35px",
                  justifyContent: "space-between",
                  color: "#ebb905",
                  fontWeight: "bold"
                }}
              >
                $ 350
                <Button onClick={()=>handleCart()} className="btn" variant="contained" color="success">
                {cartBtn}
                </Button>
              </span>
            </p>
          </ContentContainer>
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer = styled.div`
  width:100%;
  background:#5c585b;
  color:#ffffff;
  display:flex;
  margin-bottom:2px;
  flex-direction:row;
  border: 1px solid lightgray;
  border-radius:5px;
  
  Button.btn:hover{
    background:#e8402a;
    color:white;
  }
  @media${deviceMax.mobileL}{
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:row;
    height:92%;
    padding:5px;
    margin:0px;
    .btn{
    font-size:9px;
  }
  }
  
  @media ${device.mobileL} and ${deviceMax.tablet}{
  padding:5px;
 
 }

  
`;
const ContentContainer = styled.div`
@media${deviceMax.mobileL}{
  font-size:11px;
   display:flex;
  flex-direction:row;
 
  
}

`;
const Image = styled.div`
 margin:10px;
 @media${deviceMax.mobileL}{
  margin:5px;
  
 }
 
`;
const mapStateToProps= state =>{
  return{
    cartItems:state.cartItems
  }
}
const mapDispatchToProps=dispatch=>{
return{
  addtocart:()=>dispatch(addtoCart())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
