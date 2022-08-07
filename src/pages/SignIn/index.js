/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import BackgroundImage from "../../components/BackgroundLayout/BackgroundImage";
import Form from "../../components/FormComponent/DefaultForm";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Button/Input";

const MainSignup = styled.main`
  display: flex;
  flex-direction: row;
  height: 40rem;
  width: 100vw;
  margin-top: 2rem;

  & section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    width: 100%;
    height: 100%;
  }

  & section:first-child {
    width: calc(100% + 25rem);
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5.2rem;
    font-family: var(--rubik);
    color: var(--primary-white);

    & p {
      font-weight: 400;
      font-size: 2.6rem;
      margin-top: 3.3rem;
      text-align: start;
    }
  }

  & section:last-child {
    height: 100%;
    padding: 1rem;
  }
`;

const SignUpButton = styled(Button)`
  width: 23rem;
  height: 3.4rem;
  margin-top: 3rem;
`;

const H1 = styled.h1`
  font-weight: var(--bold);
  font-size: 4.3rem;
  line-height: 61px;

  & span {
    color: var(--primary-purple);
  }
`;

const SignInInput = styled(Input)`
  height: 4.3rem;
  font-size: 1.3rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  height: 4.3rem;
  font-size: 1.3rem;
  font-weight: var(--bold);
`;

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BackgroundImage>
      <img src={logo} className="logo" alt="didnin" />
      <MainSignup>
        <section>
          <H1>
            Controle suas
            {" "}
            <span>finanças</span>
            , sem planilha chata.
          </H1>
          <p>
            Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você
            tem tudo num único lugar e em um clique de distância.
          </p>
          <Link to="/sign-up">
            <SignUpButton type="button">Cadastre-se</SignUpButton>
          </Link>
        </section>
        <section>
          <Form title="Login">
            <label>
              E-mail
              <SignInInput type="text" />
            </label>
            <label>
              Senha
              <SignInInput type={`${showPassword ? "text" : "password"}`} />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="showpwd"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </label>
            <SubmitButton type="submit">Login</SubmitButton>
          </Form>
        </section>
      </MainSignup>
    </BackgroundImage>
  );
}

export default SignIn;
