import React from "react";
import { Container } from "./Styles/Container.styles";
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Container width="100%" height='200px' background='black'>
        <Container
          width="100%"
          display="flex"
          flexDrection="row"
          justifyContent="center"
          background='#fff'
        >
       
          <h2
            style={{
              paddingLeft: "100px",
              fontFamily: "'Raleway', sans-serif"
            }}
          >
            
            Brand
          </h2>
          <Nav>
          
            <h3 style={{ padding: "10px", color: "black" }}>
              <a style={{ color: "black", textDecoration: "none" }} href="/">
                Home
              </a>
            </h3>
            <h3 style={{ padding: "10px" }}>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="/products"
              >
                Products
              </a>
            </h3>
            <h3 style={{ padding: "10px" }}>
              <a
                style={{ color: "black", textDecoration: "none" }}
                href="/cart"
              >
                Cart
              </a>
            </h3>
          </Nav>
        </Container>
      </Container>
    </>
  );
};

const Nav = styled.div`
  width: 1100px;
  font-family: "Raleway", sans-serif;
  margin: 0px;
  display: flex;
   flex-direction: row;
  justify-content: flex-end;
  
`;
export default Navbar;
