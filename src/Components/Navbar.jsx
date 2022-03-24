import React from "react";
import { Container } from "./Styles/Container.styles";
import SearchIcon from '@mui/icons-material/Search';
import {deviceMax} from '../Utilis/Device'
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Container width="100%" background='black'>
        <Container
          display="flex"
          flexDrection="row"
          justifyContent="center"
          background='#fff'
          box-shadow='10px 10px 0px 0px gray'
         
        >
          
          <Nav>
          <Leftcontainer>
          <h2
            style={{
              paddingLeft:'20px'
             }}
          >
            
            Brand
          </h2>
         
       </Leftcontainer>
        
         <input className='input'type='text' style={{height:'30px',width:'100%',marginTop:'20px',  }}  placeholder='Search for Products,Brand and More' />
         <SearchIcon className='serachbar'style={{marginTop:'25px', }}/>
            <h3 style={{ padding: "10px"}}>
              <a style={{ color: "black", textDecoration: "none",}} href="/">
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
  width: 100%;
  font-family: "Raleway", sans-serif;
  margin: 0px;
  box-shadow:2px 2px 5px 2px gray;
  display: flex;
  flex-direction: row;
  h3:active{
   border-bottom: 2px solid red
  }
  @media ${deviceMax.mobileL}{
   
    .input{
      display:none;
    }
    
    .serachbar{
      display:none;
    }
  }
`

const Leftcontainer= styled.div`
width: 100%;
display:flex;
justify-content: flex-start;

@media ${deviceMax.mobileL}{
    width:100%;
    display:flex;
    justify-content:flex-start;
    padding-right:10px;
    margin:0px;
  }
`


export default Navbar;
