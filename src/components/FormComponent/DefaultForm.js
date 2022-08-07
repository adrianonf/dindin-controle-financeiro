/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styled from "styled-components";

const FormSection = styled.section`
  background-color: lightblue;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  max-width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--primary-white);
  position: relative;

  & h1 {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;
    color: var(--primary-purple);
  }

  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  & label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--primary-gray);
    font-size: 1.8rem;
    width: 100%;
  }

  & .showpwd {
    position: absolute;
    right: 3rem;
    bottom: 12.2rem;
  }
`;

function Form(props) {
  return (
    <FormSection>
      <h1>{props.title}</h1>
      <form>{props.children}</form>
    </FormSection>
  );
}

export default Form;
