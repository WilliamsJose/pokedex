import styled from 'styled-components';
import { Container } from '../../components/Container/styles';

export const HomeListContainer = styled(Container)`
  flex-flow: wrap;
  justify-content: space-evenly;
`;

export const HomeContainer = styled(Container)`
  flex-direction: column;
  padding: 0 25px;
  max-width: 1024px;
  margin: auto;
  position: relative;
`;
