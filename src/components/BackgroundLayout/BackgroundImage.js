import styled from "styled-components";
import backgroundImage from "../../assets/background-image.svg";

const Main = styled.section`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  & .logo {
    width: 169px;
    height: 45px;
    margin: 40px 104px;
  }
`;

export default Main;
