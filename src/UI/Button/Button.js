import styled from "styled-components";

const Button = styled.button`
  font-family: var(--rubik);
  font-weight: var(--bold);
  color: var(--primary-white);
  background-color: var(--primary-purple);
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover);
  }
`;

export default Button;
