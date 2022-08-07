/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import BackgroundImage from "../../components/BackgroundLayout/BackgroundImage";
import Form from "../../components/FormComponent/DefaultForm";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Button/Input";

const MainSignUp = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const SignUpInput = styled(Input)`
  width: 34.9rem;
  height: 4rem;
  margin-bottom: 2rem;
`;

const SignUpButton = styled(Button)`
  width: 100%;
  height: 4.3rem;
  font-size: 1.3rem;
  font-weight: var(--bold);
`;

const SignUpForm = styled(Form)`
  max-height: 50px;
`;

function SignUp() {
  return (
    <BackgroundImage>
      <img src={logo} alt="logomarca" className="logo" />
      <MainSignUp>
        <SignUpForm title="Cadastre-se">
          <label>
            Nome
            <SignUpInput />
          </label>
          <label>
            E-mail
            <SignUpInput />
          </label>
          <label>
            Senha
            <SignUpInput />
          </label>
          <label>
            Confirmação de senha
            <SignUpInput />
          </label>
          <SignUpButton type="submit">Cadastre-se</SignUpButton>
        </SignUpForm>
      </MainSignUp>
    </BackgroundImage>
  );
}

export default SignUp;
