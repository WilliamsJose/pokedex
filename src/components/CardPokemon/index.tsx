import PokeBallSports from '../../assets/poke-ball-sports.svg';
import { IPokemonType } from '../../domain';
import { CardDefault } from '../CardDefault/styles';
import Container from '../Container';
import { PokemonTitle } from '../PokemonTitle/styles';
import { PokemonTypePill } from '../PokemonTypePill/styles';
import * as S from './styles';

interface CardPokemonProps {
  name: string;
  types: IPokemonType[];
  urlImage: string;
}

const CardPokemon = ({ name, types, urlImage }: CardPokemonProps) => {
  // set bgcolor based on first element type of pokémon
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  return (
    <CardDefault $bgColor={normalizedPokemonType}>
      <S.PokeBallImage src={PokeBallSports} />
      <S.TopColumnContainer>
        <PokemonTitle>{name}</PokemonTitle>
        <Container>
          <S.PokemonTypeContainer>
            {types &&
              types.map(pokemon => (
                <PokemonTypePill key={pokemon.type.name}>
                  {pokemon.type.name}
                </PokemonTypePill>
              ))}
          </S.PokemonTypeContainer>
          <S.PokemonImage src={urlImage} />
        </Container>
      </S.TopColumnContainer>
    </CardDefault>
  );
};

export default CardPokemon;
