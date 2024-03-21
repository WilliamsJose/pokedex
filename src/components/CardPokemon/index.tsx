import { useEffect } from 'react';
import { toast } from 'react-toastify';
import PokeBallSports from '../../assets/poke-ball-sports.svg';
import { useData } from '../../hooks/swr';
import { CardDefault } from '../CardDefault/styles';
import Container from '../Container';
import { PokemonTitle } from '../PokemonTitle/styles';
import { PokemonTypePill } from '../PokemonTypePill/styles';
import * as S from './styles';
import { IPokemonType } from '../../domain';

interface CardPokemonProps {
  name: string;
}

const CardPokemon = ({ name }: CardPokemonProps) => {
  const { data, isLoading, error } = useData(`pokemon/${name}`);
  // set bgcolor based on first element type of pokémon
  const normalizedPokemonType =
    !isLoading && data.types[0].type.name.toLowerCase();
  const types = !isLoading && (data.types as IPokemonType[]);
  const urlImage = !isLoading && data.sprites.other.dream_world.front_default;

  useEffect(() => {
    if (error) {
      toast(`Error fetching ${name}: ${error}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <CardDefault $bgColor={normalizedPokemonType}>
      <S.PokeBallImage src={PokeBallSports} />
      <S.TopColumnContainer>
        <PokemonTitle>{name}</PokemonTitle>
        <Container>
          <S.PokemonTypeContainer>
            {isLoading && <PokemonTypePill>Loading...</PokemonTypePill>}
            {types &&
              types.map(pokemon => (
                <PokemonTypePill key={name + pokemon.type.name}>
                  {pokemon.type.name}
                </PokemonTypePill>
              ))}
          </S.PokemonTypeContainer>
          {!isLoading && <S.PokemonImage src={urlImage} />}
        </Container>
      </S.TopColumnContainer>
    </CardDefault>
  );
};

export default CardPokemon;
