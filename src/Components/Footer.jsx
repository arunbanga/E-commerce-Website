import { Container } from "../Components/Styles/Container.styles";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import { deviceMax } from "../Utilis/Device";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <Container background="#f2f2f2" width="100%">
        <MainContainer>
          <LeftContainer>
            <h1>Brand Name</h1>
          </LeftContainer>
          <CenterContainer>
            <div className="info text-xl py-2">
              <h2>Customer Service</h2>
              <p>Order History</p>
              <p>Order Tracking</p>
              <p>My Account</p>
              <p>Careers</p>
              <p>Help and FAQs</p>
            </div>
          </CenterContainer>
          <RightContiner>
            <div className="info text-xl py-2 ">
              <h2>CONTACT INFO</h2>
              <h3>Address</h3>
              <p>St 123, Mumbai</p>
              <h3>Phone</h3>
              <p>Toll free (123) 456-7890</p>
              <h3>Email</h3>
              <p>mail@domain.com</p>
              <h3>Working day/hours</h3>
              <p>Mon-Friday/10:00AM - 05:00PM</p>
            </div>
          </RightContiner>
          <IconsContainer>
            <h3 className="text-lg py-1">Follow us on</h3>
            <div>
              <TwitterIcon style={{ color: "#09d8eb" }} />
              <YouTubeIcon style={{ color: "#ff0019" }} />
              <FacebookIcon style={{ color: "#1186fa" }} />
              <InstagramIcon style={{ color: "#ff0550" }} />
            </div>
          </IconsContainer>
        </MainContainer>
      </Container>
    </>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 450px;
  background: #f2f2f2;
  position: absolute;
  left: 0px;
  display: flex;
  margin-top: 50px;
  padding: 0px;
  @media ${deviceMax.mobileL} {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1350px;
    align-items: center;
  }
`;
const LeftContainer = styled.div`
  width: 20%;
  padding-left: 10px;
  font-weight: bold;
  font-size: 25px;
  @media ${deviceMax.mobileL} {
    font-size: 30px;
    margin: 0px;
    padding: 0px;
    width: 70%;
  }
`;
const CenterContainer = styled.div`
  width: 30%;

  @media ${deviceMax.mobileL} {
    font-size: 20px;
    width: 70%;
    .info {
      font-size: 15px;
    }
  }
`;
const RightContiner = styled.div`
  width: 30%;
  @media ${deviceMax.mobileL} {
    font-size: 20px;
    width: 70%;
    .info {
      font-size: 15px;
    }
  }
`;
const IconsContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  @media ${deviceMax.mobileL} {
    position: absolute;
    bottom: 100px;
  }
`;
export default Footer;
