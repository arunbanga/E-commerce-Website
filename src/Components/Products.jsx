import React from "react";
import { Container } from "../Components/Styles/Container.styles";
import Card from './Card'
import {deviceMax} from '../Utilis/Device'
import styled from "styled-components";
const Products = () => {
  return (
    <>
      <Container width="100%">
        <Sidebar>
          <LeftData>
            <h1
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                textAlign: "center"
              }}
            >
              Products family
            </h1>
            <hr style={{ borderBottom: "2px solid green" }} />
            <div style={{ marginLeft: "20px" }}>
              <h3>Shoes</h3>
              <h3>Shirts</h3>
              <h3>Watches</h3>
              <h3>Belts</h3>
              <h3>Socks</h3>
              <h3>Mobiles</h3>
            </div>
            <h1
              style={{
                marginLeft: "10px",
                fontSize: "20px",
                textAlign: "center"
              }}
            >
              Sizes
            </h1>
            <hr style={{ borderBottom: "2px solid green" }} />
            <div style={{ marginLeft: "20px" }}>
              <h3>
                <input type="color" style={{ border: "none" }} />S
              </h3>
              <h3>
               
                <input type="color" style={{ border: "none" }} />M
              </h3>
              <h3>
               
                <input type="color" style={{ border: "none" }} />L
              </h3>
            </div>
            <h1 style={{ marginLeft: "10px", fontSize: "20px" }}>Price</h1>
            <hr style={{ borderBottom: "2px solid green" }} />
            <div>
                <input type='range'/>
                <h3>Min:0  Max:0</h3> 
            </div>
          </LeftData>
          <CenterData>
           <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/> 

          </CenterData>
        </Sidebar>
      </Container>
    </>
  );
};

const Sidebar = styled.div`
  width: 90%;
  position:absolute;;
  top:90px;
  display: flex;
  justify-content: flex-start;
  margin-left:100px;
  @media ${deviceMax.mobileL}{
    width:35%;
  }
`;

const LeftData = styled.div`
  width: 250px;
  height: 100%;
  font-family: "Raleway", sans-serif;
  background: #fff;
  @media ${deviceMax.mobileL}{
   display:none;
}
`;
const CenterData=styled.div`
width:900px;
display:flex;
flex-direction:column;
height:200px;


`
export default Products;
