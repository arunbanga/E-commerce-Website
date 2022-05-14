import React from "react";
import { Container } from "./Styles/Container.styles";
import {NavLink} from 'react-router-dom'
import { deviceMax ,device} from "../Utilis/Device";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { removetoCart, Decrement, increment } from "../Redux/Carts/Action";
const Cart = () => {
  const items = useSelector(state => state.cart.cartItems);
  console.log(items);
  const dispatch = useDispatch();

  const remove = id => {
    dispatch(removetoCart(id));
    console.log(remove);
  };
  const decre = item => {
    dispatch(Decrement(item));
  };
  const inc = id => {
    dispatch(increment(id));
  };

  //  let total=0;
  //  const itemlist=(val)=>{
  //    total=total+val.price
  // }
  const getTotal = () => {
    let total = 0;
    items.forEach(function(elm) {
      total = total + elm.price * elm.qty;
    });
    console.log(total);
    return total;
  };

  return (
    <>
      <Container width="100%" background="#d9dbd9" height="100%">
        <MainContainer>
          <RightContainer>
            <p
              style={{
                textAlign: "left",
                color: "#1e8bd4",
                paddingLeft: "5px"
              }}
            >
              My Cart ({items.length})
            </p>
            <hr />
            <ul>
              {items.map(val => {
                return (
                  <li key={val.id} className="list">
                    <img src={val.image} className="image" alt={val.title} />
                    <h4 className="title">{val.title}</h4>
                    <p className="price">{val.price * val.qty}</p>
                    <div style={{ marginLeft: "20px", display: "flex" }}>
                      <div className='qty'>
                        <span
                          style={{
                            fontSize: "24px",
                            paddingRight: "5px",
                            cursor: "pointer"
                          }}
                          onClick={() => decre(val)}
                        >
                          -
                        </span>
                        <span style={{ fontSize: "20px" }}>{val.qty}</span>
                        <span
                          style={{
                            fontSize: "24px",
                            paddingLeft: "5px",
                            cursor: "pointer"
                          }}
                          onClick={() => inc(val.id)}
                        >
                          +
                        </span>
                      </div>
                      <div className='btn'>
                      <Button
                        onClick={() => remove(val.id)}
                        style={{ marginLeft: "20px" }}
                        variant="contained"
                      >
                        Delete
                      </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </RightContainer>
          <LeftContainer>
            <h4
              style={{
                textAlign: "left",
                fontFamily: "Open Sans",
                fontSize: "20px",
                letterSpacing: "2px",
                height: "30px",
                color: "green"
              }}
            >
              Price Details
            </h4>
            <hr />
            {/* {items.map(itemlist)} */}
            {/* <p>Total items:$ {total}</p> */}
            <p>Total items:$ {getTotal()}</p>
            <div>
            <NavLink to = '/checkout' style={{textDecoration:'none'}}><Button variant='outlined'>Checkout</Button></NavLink>              
            </div>
          </LeftContainer>
         
        </MainContainer>
      </Container>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media ${deviceMax.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
const RightContainer = styled.div`
  display: block;
  justify-content: flex-start;
  flex-direction: row;
  width: 60%;
  height: 500px;
  overflow-y: scroll;
  margin-top: 20px;
  margin-left: 10px;
  border: 2px solid white;
  background: white;
  box-shadow: 1px 1px px 1px gray;
  @media ${device.mobileL} and ${deviceMax.tablet}{
            width:66%;
 
 }
  .list {
    color: black;
    display: flex;
    align-items: center;
    justify-content:space-between;
    width:70%;
    @media ${device.mobileL} and ${deviceMax.tablet}{
            width:97%;
 
     }
  }
  .image {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  ul {
    .title {
      padding-left: 10px;
    }
    .price {
      padding-left: 10px;
    }
    .qty{
      margin-top:4px;
    }
    .btn{
      margin-left:10px;
    }
  }
  @media ${deviceMax.mobileL} {
    width: 93%;
    .list{
      display:flex;
      flex-direction:column;
      margin-left:0px;
      width:82%;
      justify-content:center;
      align-items:center;
      padding-left:0px;
    }
    
  }

`;
const LeftContainer = styled.div`
  width: 25%;
  border: 2px solid white;
  box-shadow: 1px 1px px 1px gray;
  height: 500px;
  background: white;
  margin: 10px;
  margin-top: 20px;
  padding-left: 5px;
  @media ${deviceMax.mobileL} {
    width: 92%;
  }
`;


export default Cart;
