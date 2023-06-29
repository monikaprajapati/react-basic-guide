import styled from "styled-components";

type CustomProperty = {
  invalid?: number;
};

export const ExpenseFallBack = styled.h2<CustomProperty>`
  color: ${(props) => (props.invalid === 1 ? "red" : "white")};
  text-align: center;

  &.invalid {
    color: red;
  }
`;
