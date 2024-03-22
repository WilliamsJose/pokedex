import styled from 'styled-components';
import { Image } from '../Image/styles';
import { Container } from '../Container/styles';
import { LuImageOff } from 'react-icons/lu';

export const ImageOffWhite = styled(LuImageOff)`
  color: white;
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

export const PokemonImage = styled(Image)`
  width: 100px;
  height: 105px;
  position: absolute;
  right: 10px;
  bottom: 10px;
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
  box-sizing: border-box;
`;

export const PokemonTypeContainer = styled(Container)`
  flex-direction: column;
  width: 60%;
`;
