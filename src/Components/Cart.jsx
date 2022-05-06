import React from "react";
import { Container } from "./Styles/Container.styles";
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

  // let total=''
  // const itemlist=(val)=>{
  //   total=total+val.price
  // }

  return (
    <>
      <Container width="100%" background='#f5f5f2' height='100%'>
        <MainContainer>
           <RightContainer>
          <p style={{ textAlign: "left", color: "#1e8bd4",paddingLeft:'5px' }}>My Cart ({items.length})</p>
           <hr/>
            <ul>
              {items.map(val => {
                return (
                  <li
                    key={val.id}
                    style={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px"
                    }}
                  >
                    <h4>{val.title}</h4>
                    <img
                      src={val.image}
                      style={{
                        width: "90px",
                        height: "100px",
                        margin: "10px"
                      }}
                      alt={val.title}
                    />
                    <p>{val.price}</p>
                    <div style={{ marginLeft: "10px", display: "flex" }}>
                      <div>
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
                      <Button
                        onClick={() => remove(val.id)}
                        style={{ marginLeft: "20px" }}
                        variant="contained"
                      >
                        
                        Delete
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
            
          </RightContainer>
          {/* <LeftContainer>
          <h4 style={{textAlign:'center',fontFamily:'Open Sans',}}>Price Details</h4>
          {items.map(itemlist)}
              <p>Total items:{total}</p>
            </LeftContainer> */}
          {/* <button onClick={()=>(dispatch(removetoCart()))}>Remove</button> */}
        </MainContainer>
      </Container>
    </>
  );
};

const MainContainer = styled.div`
  width: 70%;
  height:100vh;
  display:flex;
  justify-content:center;
 
`;
const RightContainer = styled.div`
  display: block;
  justify-content: flex-start;
  flex-direction: row;
  width:90%;
  height:500px;
  overflow-y: scroll;
  margin-top:20px;
  border:2px solid white;
  background:white;
  box-shadow: 1px 1px px 1px gray;
  
`;
// const LeftContainer = styled.div`
//   width:30%;
//   border:2px solid lightgray;
//   height:500px;
//   background:white;
//   margin:10px;
//   padding-left:5px;
// `;

export default Cart;
