import styled from "styled-components";

export const Container = styled.div`
width:${({ width }) => (width ? width : "100%")};
height:${({height})=>(height? height:'100%')}
padding:${({ padding }) => (padding ? padding : "0px")};
margin:${({ margin }) => (margin ? margin : "0px")};
display:${({ display }) => (display ? display : "block")};
flex-direction:${({ flexDirection }) => (flexDirection ? flexDirection : "")}
justify-content:${({ justifyContent }) =>
  justifyContent ? justifyContent : ""}
align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
background:${({ background }) => (background ? background : "white")}


`;
