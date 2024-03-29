import styled from 'styled-components';
import Container from '../../components/Container';
import { Button } from '../../components/Button/styles';

export const NotFoundContainer = styled(Container)`
  flex-direction: column;
  place-items: center;
  place-content: center;
  height: 100vh;
  color: black;
`;

export const NotFoundButton = styled(Button)`
  color: white;
  background-color: blue;
`;

export const NotFoundText = styled.p`
  color: black;
`;
