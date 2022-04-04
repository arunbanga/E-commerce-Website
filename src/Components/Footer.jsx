import {Container} from '../Components/Styles/Container.styles'
import styled from 'styled-components'
const Footer=()=>{
    return(
        <>
        <Container background='black' width='100%' >
            <MainContainer>
      <h1>jfj</h1>
            </MainContainer>
        </Container>
        

        </>
    )
}

const MainContainer=styled.div`
 display: flex;
 align-items:flex-end;
 position:static;
 bottom:0;
`
export default Footer;