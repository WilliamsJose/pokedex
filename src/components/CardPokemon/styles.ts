import styled from 'styled-components';
import { Image } from '../Image/styles';
import { Container } from '../Container/styles';

export const PokemonImage = styled(Image)`
  width: 90px;
  height: 90px;
  margin: 10px 0 0 20px;
  transform: scaleX(-1);
`;

export const PokeBallImage = styled(Image)`
  opacity: 0.15;
  width: 65%;
  position: absolute;
  right: -10%;
  bottom: -10%;
`;

export const TopColumnContainer = styled(Container)`
  flex-direction: column;
  padding: 0 16px;
  margin-top: 6px;
`;

export const PokemonTypeContainer = styled(Container)`
  flex-direction: column;
  width: 60%;
`;
