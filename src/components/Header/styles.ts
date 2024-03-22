import styled from 'styled-components';
import { Button } from '../Button/styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  background-color: inherit;
  font-size: 30px;
  place-items: center;
  padding: 40px 18px;
  color: white;
`;

export const ButtonExt = styled(Button)`
  padding: 8px;
  color: black;
  height: 50px;
  text-align: center;
  border: none;
  width: 50px;
  background-color: inherit;
  transition: color 0.4s ease;
  &:hover {
    color: red;
  }
`;
