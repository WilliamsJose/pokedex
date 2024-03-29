import styled from 'styled-components';
import { Image } from '../Image/styles';
import { PokemonTypePill } from '../PokemonTypePill/styles';
import { PokemonTitle } from '../PokemonTitle/styles';
import { CardDefault } from '../CardDefault/styles';
import { TabContainer } from '../Tab/styles';
import { Container } from '../Container/styles';
import { LuImageOff } from 'react-icons/lu';

export const TopCard = styled(CardDefault)`
  box-sizing: border-box;
  min-width: fit-content;
  height: 50%;
  min-height: 200px;
  max-width: 1024px;
  padding: 0 25px 190px 25px;
  flex-direction: column;
  border-radius: 0;
  margin: auto;
  @media only screen and (min-width: 600px) {
    min-height: 300px;
  }
  @media only screen and (min-width: 1280px) {
    overflow: visible;
  }
`;

export const LowerCard = styled(TopCard)`
  background-color: white;
  border-radius: 15px 15px 0 0;
  min-height: 100%;
  overflow: visible;
  padding-top: 20px;
  color: black;
`;

export const PokeBallImage = styled(Image)`
  opacity: 0.15;
  width: 35%;
  position: absolute;
  right: -8%;
  bottom: -8%;
`;

export const PokemonImage = styled(Image)`
  position: absolute;
  height: 250px;
  top: -220px;
  @media only screen and (min-width: 600px) {
    left: -30px;
  }
`;

export const PokemonNoImage = styled(LuImageOff)`
  position: absolute;
  color: white;
  top: -150px;
  left: 45%;
`;

export const PokemonTypePillExt = styled(PokemonTypePill)`
  flex-direction: row;
  font-size: 4vw;
  width: fit-content;
  text-align: center;
  @media only screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const PokemonTitleExt = styled(PokemonTitle)`
  font-size: 9vw;
  margin: 0;
  @media only screen and (min-width: 600px) {
    font-size: 65px;
  }
`;

export const PokemonId = styled(PokemonTitle)`
  font-size: 3vw;
  margin: 0;
  text-align: end;
`;

export const TabContainerExt = styled(TabContainer)`
  border-radius: 0;
  padding: 0 10px;
  box-sizing: border-box;
  height: 100%;
`;

export const MarginSpan = styled.span<{ $value: number }>`
  margin: ${props => props.$value < 100 && '0 4px'};
`;

export const SpacedRow = styled(Container)`
  & > :first-child {
    flex: 0 0 28%;
  }

  & > :nth-child(2) {
    flex: 1;
  }
`;
