import styled from 'styled-components';
import { Button } from '../Button/styles';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
  box-sizing: border-box;
  height: 48px;
  background-color: red;
  font-size: 30px;
  place-items: center;
  padding: 40px 18px;
  color: white;
`;

export const ButtonExt = styled(Button)`
  background-color: inherit;
  padding: 8px;
  color: white;
  height: 50px;
  text-align: center;
  width: 50px;
`;
