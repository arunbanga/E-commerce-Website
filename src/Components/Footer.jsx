import {Container} from '../Components/Styles/Container.styles'
import styled from 'styled-components'
const Footer=()=>{
    return(
        <>
        <Container background='#f2f2f2' width='100%' >
            <MainContainer>
               <LeftContainer>
                   <h1>Brand Name</h1>
                 </LeftContainer>
                 <CenterContainer>
                  <h2>Customer Service</h2>
                  <p>Order History</p>
                  <p>Order Tracking</p>
                  <p>My Account</p>
                  <p>Careers</p>
                  <p>Help and FAQs</p>
                 </CenterContainer>
                 <RightContiner>
                     <h2>CONTACT INFO</h2>
                     <h3>Address</h3>
                     <p>St 123, Mumbai</p>
                     <h3>Phone</h3>
                     <p>Toll free (123) 456-7890</p>
                     <h3>Email</h3>
                     <p>mail@domain.com</p>
                     <h3>Working day/hours</h3>
                     <p>Mon-Friday/10:00AM - 05:00PM</p>
                 </RightContiner>
            </MainContainer>
        </Container>
        

        </>
    )
}

const MainContainer=styled.div`
width:100%;
height:100%;
background:#f2f2f2;
position:absolute;
left:0px;
display:flex;
margin-top:50px;
padfding:0px;
`
const LeftContainer=styled.div`

width:30%
`
const CenterContainer=styled.div`
 width:30%
`
const RightContiner=styled.div`
width:30%;
`
export default Footer;