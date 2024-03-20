import styled, { css } from 'styled-components';

export const Button = styled.button<{ $primary?: boolean }>`
  color: black;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  ${props =>
    props.$primary &&
    css`
      background-color: green;
      color: white;
    `};
`;
