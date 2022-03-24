import React from "react";
import { Container } from "./Styles/Container.styles";
import {deviceMax} from '../Utilis/Device'
import styled from 'styled-components'
const Card = () => {
  return (
    <>
      <Container width="100%" display="flex" flexDirection="row" margin='10px'>
      <CardContainer>
          

          
     <Image>

    
        
          <img
            className="images"
            src="https://images-eu.ssl-images-amazon.com/images/I/41PdV1qZQpL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
            style={{
              width: "140px",
              height: "120px",
              border: "1px solid gray",
              borderRadius:'5px',
              margin: "2px"
            }}
          />
         </Image>
       
        <ContentContainer>

       
        <p>
          Products Name
          <span style={{ display: "block", marginTop: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            assumenda voluptas rep...
          </span>
          <span className='span'
            style={{
              display: "flex",
              paddingTop: "35px",
              justifyContent: "space-between"
            }}
          >
            $129<button className='btn'>Buy Now</button>
          </span>
        </p>
        </ContentContainer>
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer=styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  border: 1px solid black;
  border-radius:5px;
  @media${deviceMax.mobileL}{
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction:row;
    height:100%;
    padding:5px
  }

  
`
const ContentContainer= styled.div`
@media${deviceMax.mobileL}{
  
  display:flex;
  flex-direction:row;
  
}

`
const Image=styled.div`
 margin:10px;
 @media${deviceMax.mobileL}{
   display:none;
 }
`

export default Card;
