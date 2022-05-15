import React from "react";
import { useSelector } from "react-redux";
import {deviceMax} from '../Utilis/Device'
import styled from "styled-components";
const Checkout = () => {
  const items = useSelector(state => state.cart.cartItems);
  return (
    <>
      <MainContainer>
        <CenterContainer>
          <div>
            <h4 style={{ paddingLeft: "10px" }}>Image</h4>
            <h4>Products Name</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
          </div>
        </CenterContainer>
        <RightContainer>
          <div>
            {items.map(val => {
              return (
                <div className="list">
                  <img src={val.image} className="image" alt={val.title} />
                  <h4 className="title">{val.title}</h4>
                  <h4 className="qty">{val.qty}</h4>
                  <h4 className="price">{val.price}</h4>
                  <Footer>
                    <p>Your Order has been Placed Successfully .</p>
                  </Footer>
                </div>
              );
            })}
          </div>
        </RightContainer>
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
const CenterContainer = styled.div`
  div {
    width: 37%;
    background:lightgray;
    color:#13729c;
    height:42px;
    padding:0px 10px 0px 5px;
    display: flex;
    margin-top:10px;
    align-items:center;
    margin-left: 10px;
    justify-content: space-between;
    @media ${deviceMax.mobileL}{
      width:95%;
    }
  }
  
`;

const RightContainer = styled.div`
  div {
    width: 60%;
    display: block;
    margin-left: 5px;
    justify-content: space-between;
    @media ${deviceMax.mobileL}{
      width:95%;
    }
  }

  .list {
    display: flex;
    margin-top: 5px;
  }
  .image {
    width: 50px;
    height: 60px;
  }
  
  
`;
const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10px;
  display: flex;
  margin-left: 10px;
  justify-content: center;
  color: green;
  font-weight: bold;
`;

export default Checkout;
