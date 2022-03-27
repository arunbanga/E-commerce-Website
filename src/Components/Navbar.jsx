import React from "react";
import { Container } from "./Styles/Container.styles";
import SearchIcon from "@mui/icons-material/Search";
import { deviceMax } from "../Utilis/Device";
import styled from "styled-components";

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
              <h2
                style={{
                  marginLeft: "5px",
                  color: "#ffae00"
                }}
              >
                Brand
              </h2>
            </Leftcontainer>

            <input
              className="input"
              type="text"
              style={{
                height: "30px",
                width: "50%",
                marginTop: "20px",
                border: "1px solid #ff7200",
                color: "white",
                borderBottom: "none",
                borderRadius: "5px"
              }}
              placeholder="Search for Products,Brand and More"
            />
            <SearchIcon
              className="serachbar"
              style={{ marginRight: "20px", marginTop: "25px" }}
            />
            <div className="nav">
              <h3 style={{ padding: "10px" }}>
                <a style={{ textDecoration: "none" }} href="/">
                  Home
                </a>
              </h3>
              <h3 style={{ padding: "10px" }}>
                <a style={{ textDecoration: "none" }} href="/products">
                  Products
                </a>
              </h3>
              <h3 style={{ padding: "10px" }}>
                <a style={{ textDecoration: "none" }} href="/cart">
                  Cart
                </a>
              </h3>
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
  font-size: 20px;
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
