import React from "react";
import { Container } from "./Styles/Container.styles";
import SearchIcon from "@mui/icons-material/Search";
import { deviceMax } from "../Utilis/Device";
import styled from "styled-components";
import {NavLink} from 'react-router-dom'
import Button from '../Components/Button'
const Navbar = () => {
  return (
    <>
      <Container width="100%" background="black">
        <Container
          display="flex"
          flexDrection="row"
          justifyContent="center"
          background="#fff"
          box-shadow="10px 10px 0px 0px gray"
        >
          <Nav>
            <Leftcontainer>
              <h2 className='text-3xl text-yellow-600 py-3 px-2 font-semibold'>
                Brand
              </h2>
            </Leftcontainer>

            <input
              className="input h-7 w-1/2 my-4 border border-black-500 rounded ml-1"
              type="text"
              // style={{
              //   height: "30px",
              //   width: "50%",
              //   marginTop: "20px",
              //   border: "1px solid #ff7200",
              //   color: "black",
              //   borderBottom: "none",
              //   borderRadius: "5px"
              // }}
              placeholder="Search for Products,Brand and More"
            />
            <SearchIcon
              className="serachbar mr-5 ml-1 mt-5 "
              // style={{ marginRight: "20px", marginTop: "25px" }}
            />
            <div className="nav" >
            <NavLink  className='py-5 mx-2' to='/'> Home</NavLink>
            <NavLink  className='py-5 mx-2' to='/products'> Products</NavLink>
            <Button/> 
            </div>
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
  box-shadow: 2px 2px 5px 2px gray;
  display: flex;
  background: #151f3d;
  color: white;
  flex-direction: row;

  h3:active {
    border-bottom: 2px solid red;
  }
  .nav {
    display: flex;
  }
  .nav a {
    color: white;
  }
  .nav a:hover {
    color: #ffae00;
  }
  @media ${deviceMax.mobileL} {
    .input {
      display: none;
    }

    .serachbar {
      display: none;
    }
  }
`;

const Leftcontainer = styled.div`
  width: 100%;
  display: flex;
  font-bold: underline;
  justify-content: flex-start;

  @media ${deviceMax.mobileL} {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-right: 10px;
    margin: 0px;
  }
`;

export default Navbar;
