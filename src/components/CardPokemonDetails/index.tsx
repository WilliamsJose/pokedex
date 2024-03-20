import { useState } from 'react';
import PokeBallSports from '../../assets/poke-ball-sports.svg';
import { IPokemon } from '../../domain';
import Tab, { TabContent, TabItem } from '../Tab';
import * as S from './styles';
import Container from '../Container';

interface CardPokemonDetailsProps {
  data: IPokemon;
}

const CardPokemonDetails = ({ data }: CardPokemonDetailsProps) => {
  const { name, types, id } = data;
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  const pokemonImageUrl = data.sprites.other.dream_world.front_default;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const onTabSelected = (index: number) => {
    console.log(index);
    setSelectedTab(index);
  };

  return (
    <>
      <S.TopCard $bgColor={normalizedPokemonType}>
        <S.PokemonTitleExt>{name}</S.PokemonTitleExt>
        <S.PokemonId>#{String(id).padStart(3, '0')}</S.PokemonId>
        <Container>
          {types.map(pokemon => (
            <S.PokemonTypePillExt key={pokemon.type.name}>
              {pokemon.type.name}
            </S.PokemonTypePillExt>
          ))}
        </Container>
        <S.PokeBallImage src={PokeBallSports} />
      </S.TopCard>
      <S.LowerCard>
        <S.PokemonImage src={pokemonImageUrl} />
        <Tab onTabSelected={onTabSelected}>
          <TabItem>About</TabItem>
          <TabItem>Base Stats</TabItem>
          <TabItem>Evolution</TabItem>
          <TabItem>Moves</TabItem>
        </Tab>
        <TabContent selectedTab={selectedTab} tabToShow={0}>
          zero
        </TabContent>
        <TabContent selectedTab={selectedTab} tabToShow={1}>
          um
        </TabContent>
      </S.LowerCard>
    </>
  );
};

export default CardPokemonDetails;
