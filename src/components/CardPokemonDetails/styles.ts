import styled from 'styled-components';
import { Image } from '../Image/styles';
import { PokemonTypePill } from '../PokemonTypePill/styles';
import { PokemonTitle } from '../PokemonTitle/styles';
import { CardDefault } from '../CardDefault/styles';
import { TabContainer } from '../Tab/styles';
import { Container } from '../Container/styles';

export const TopCard = styled(CardDefault)`
  width: 100vw;
  box-sizing: border-box;
  min-width: fit-content;
  height: 50%;
  max-height: 200px;
  max-width: 1024px;
  padding: 0 18px;
  flex-direction: column;
  border-radius: 0;
  @media only screen and (min-width: 600px) {
    min-height: 300px;
  }
`;

export const LowerCard = styled(TopCard)`
  background-color: white;
  border-radius: 15px 15px 0 0;
  margin-top: -5vh;
  min-height: 100%;
  overflow: visible;
`;

export const PokeBallImage = styled(Image)`
  opacity: 0.15;
  width: 35%;
  position: absolute;
  right: -8%;
  bottom: -8%;
`;

export const PokemonImage = styled(Image)`
  width: 35%;
  max-width: 300px;
  position: sticky;
  margin: -28% auto 0 auto;
`;

export const PokemonTypePillExt = styled(PokemonTypePill)`
  flex-direction: row;
  width: 40px;
  text-align: center;
`;

export const PokemonTitleExt = styled(PokemonTitle)`
  font-size: 7vw;
  @media only screen and (min-width: 600px) {
    font-size: 5vw;
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

export const SpacedRow = styled(Container)`
  & > :first-child {
    flex: 0 0 28%;
  }

  & > :nth-child(2) {
    flex: 1;
  }
`;
