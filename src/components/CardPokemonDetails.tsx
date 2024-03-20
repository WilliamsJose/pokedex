import styled from 'styled-components';
import PokeBallSports from '../assets/poke-ball-sports.svg';
import { IPokemonType } from '../domain';
import Image from './Image';
import CardDefault from './CardDefault';

const TopCard = styled(CardDefault)`
  width: 100vw;
  min-width: fit-content;
  min-height: 50vh;
  max-width: 1140px;
  border-radius: 0;
`;

const LowerCard = styled(TopCard)`
  background-color: aliceblue;
  border-radius: 15px 15px 0 0;
  margin-top: -5vh;
  min-height: 55vh;
`;

const PokeBallImage = styled(Image)`
  opacity: 0.15;
  width: 35%;
  position: absolute;
  right: -8%;
  bottom: -8%;
`;

interface CardPokemonDetailsProps {
  name: string;
  types: IPokemonType[];
  urlImage: string;
}

const CardPokemonDetails = ({
  name,
  types,
  urlImage,
}: CardPokemonDetailsProps) => {
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  return (
    <>
      <TopCard $bgColor={normalizedPokemonType}>
        <PokeBallImage src={PokeBallSports} />
        <span>{name}</span>
        <span>{urlImage}</span>
      </TopCard>
      <LowerCard></LowerCard>
    </>
  );
};

export default CardPokemonDetails;
