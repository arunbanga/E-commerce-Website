import React from 'react'
import {Container} from '../Components/Styles/Container.styles'
import styled from 'styled-components'
const Products =()=>{
    return(
        <>
        <Container width='100%' >
        <Container >
        <Sidebar>
        
            <h1 style={{marginLeft:'10px',fontSize:'20px',textAlign:'center'}}>Products family</h1>
            <hr/>
            <div style={{marginLeft:'20px'}}>
            <h3>Shoes</h3>
            <h3>Shirts</h3>
            <h3>Watches</h3>
            <h3>Belts</h3>
            <h3>Socks</h3>
            <h3>Mobiles</h3>
            </div>
          <h1 style={{marginLeft:'10px',fontSize:'20px',textAlign:'center'}}>Sizes</h1>
          <hr/>
          <div style={{marginLeft:'20px'}}>
              <h3>S</h3>
              <h3>M</h3>
              <h3>L</h3>
          </div>
          


        </Sidebar>

        



        </Container>

        </Container>
        
        </>
    )
}

const Sidebar= styled.div`
width:300px;
height:100%;
font-family: 'Raleway', sans-serif;
background:#fff


`
export default Products