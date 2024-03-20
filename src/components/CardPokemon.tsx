import styled from 'styled-components';
import PokeBallSports from '../assets/poke-ball-sports.svg';
import { IPokemonType } from '../domain';
import CardDefault from './CardDefault';
import Container from './Container';
import Image from './Image';
import PokemonTitle from './PokemonTitle';
import PokemonTypePill from './PokemonTypePill';

const PokemonImage = styled(Image)`
  width: 90px;
  height: 90px;
  margin: 10px 0 0 20px;
  transform: scaleX(-1);
`;

const PokeBallImage = styled(Image)`
  opacity: 0.15;
  width: 65%;
  position: absolute;
  right: -10%;
  bottom: -10%;
`;

const TopColumnContainer = styled(Container)`
  flex-direction: column;
  padding: 0 16px;
  margin-top: 6px;
`;

const PokemonTypeContainer = styled(Container)`
  flex-direction: column;
  width: 60%;
`;

interface CardPokemonProps {
  name: string;
  types: IPokemonType[];
  urlImage: string;
}

const CardPokemon = ({ name, types, urlImage }: CardPokemonProps) => {
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  return (
    // get color based on first element type of pokémon
    <CardDefault $bgColor={normalizedPokemonType}>
      <PokeBallImage src={PokeBallSports} />
      <TopColumnContainer>
        <PokemonTitle>{name}</PokemonTitle>
        <Container>
          <PokemonTypeContainer>
            {types &&
              types.map(pokemon => (
                <PokemonTypePill key={pokemon.type.name}>
                  {pokemon.type.name}
                </PokemonTypePill>
              ))}
          </PokemonTypeContainer>
          <PokemonImage src={urlImage} />
        </Container>
      </TopColumnContainer>
    </CardDefault>
  );
};

export default CardPokemon;
