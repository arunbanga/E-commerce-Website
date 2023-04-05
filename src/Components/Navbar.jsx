import React from "react";
import { Container } from "./Styles/Container.styles";
import SearchIcon from "@mui/icons-material/Search";
import { deviceMax } from "../Utilis/Device";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
const Navbar = () => {
  return (
    <>
      <Container width="100%" background="b">
        <Container
          display="flex"
          flexDrection="row"
          justifyContent="center"
          background="#fff"
          box-shadow="10px 10px 0px 0px gray"
        >
          <Nav className="bg-gray-400">
            <Leftcontainer>
              <h2 className="text-2xl text-gray-900 absolute left-1 lg:text-4xl lg:absolute lg:left-8 py-3  font-serif ">
                Brand
              </h2>
            </Leftcontainer>

            <input
              className="input h-8 w-1/2 my-4  px-3  rounded text-sm text-gray-900 border-gray-200  hover:bg-gray-200 hover:text-gray-900 hover:font-bold"
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
              className="serachbar mr-5 ml-1 my-5 hover:text-gray-600 active:text-gray-600"
              // style={{ marginRight: "20px", marginTop: "25px" }}
            />
            <div className="nav  font-serif">
              <NavLink className="py-5 mx-2 " to="/">
                Home
              </NavLink>
              <NavLink className="py-5 mx-2 " to="/products">
                Products
              </NavLink>
              <Button />
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

  color: black;
  flex-direction: row;

  h3:active {
    border-bottom: 2px solid red;
  }
  .nav {
    display: flex;
  }
  .nav a {
    color: black;
  }
  .nav a:hover {
    color: black;
    background: white;
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
