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

   let total=0;
   const itemlist=(val)=>{
     total=total+val.price
  }

  return (
    <>
      <Container width="100%" background='#d9dbd9' height='100%'>
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
                    <img
                      src={val.image}
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "10px"
                      }}
                      alt={val.title}
                    />
                    <h4 className='title'>{val.title}</h4>
                    <p className="price">{val.price}</p>
                    <div style={{ marginLeft: "20px", display: "flex" }}>
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
           <LeftContainer>
          <h4 style={{textAlign:'left',fontFamily:'Open Sans',fontSize:'20px',letterSpacing:'2px',height:'10px',color:'green'}}>Price Details</h4><hr/>
          {items.map(itemlist)}
              <p>Total items:{total}</p>
            </LeftContainer> 
           
        </MainContainer>
      </Container>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height:100vh;
  display:flex;
  justify-content:center;
 
`;
const RightContainer = styled.div`
  display: block;
  justify-content: flex-start;
  flex-direction: row;
  width:60%;
  height:500px;
  overflow-y: scroll;
  margin-top:20px;
  margin-left:10px;
  border:2px solid white;
  background:white;
  box-shadow: 1px 1px px 1px gray;
  ul{
   .title{
     padding-left:10px;
   }
   .price{
    padding-left:10px;
   }
  }
`;
const LeftContainer = styled.div`
  width:25%;
  border:2px solid white;
   box-shadow: 1px 1px px 1px gray;
   height:500px;
   background:white;
   margin:10px;
   margin-top:20px;
   padding-left:5px;
 `;

export default Cart;
