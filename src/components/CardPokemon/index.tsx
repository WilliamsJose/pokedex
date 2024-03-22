import { Link } from 'react-router-dom';
import PokeBallSports from '/poke-ball-sports.svg';
import { IPokemonType } from '../../domain';
import { useData } from '../../hooks/swr';
import { CardDefault } from '../CardDefault/styles';
import Container from '../Container';
import { PokemonTitle } from '../PokemonTitle/styles';
import { PokemonTypePill } from '../PokemonTypePill/styles';
import * as S from './styles';

interface CardPokemonProps {
  name: string;
}

const CardPokemon = ({ name }: CardPokemonProps) => {
  const { data, isLoading } = useData(`pokemon/${name}`);
  const normalizedPokemonType = data?.types[0].type.name.toLowerCase();
  const types = data?.types as IPokemonType[];
  const preferredImage = data?.sprites.other.dream_world.front_default;
  const imageUrl = preferredImage
    ? preferredImage
    : data?.sprites?.front_default;

  return (
    // set bgcolor based on first element type of pokémon
    <CardDefault $bgColor={normalizedPokemonType}>
      {!isLoading && (
        <Link to={`/pokemon/${data.name}`}>
          <S.PokeBallImage src={PokeBallSports} />
          <S.TopColumnContainer>
            <PokemonTitle>{data.name}</PokemonTitle>
            <Container>
              <S.PokemonTypeContainer>
                {types &&
                  types.map(pokemon => (
                    <PokemonTypePill key={name + pokemon.type.name}>
                      {pokemon.type.name}
                    </PokemonTypePill>
                  ))}
              </S.PokemonTypeContainer>
              {imageUrl ? (
                <S.PokemonImage src={imageUrl} />
              ) : (
                <S.ImageOffWhite size={30} />
              )}
            </Container>
          </S.TopColumnContainer>
        </Link>
      )}
    </CardDefault>
  );
};

export default CardPokemon;
