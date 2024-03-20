import { useState } from 'react';
import PokeBallSports from '../../assets/poke-ball-sports.svg';
import { IPokemon } from '../../domain';
import {
  capitalize,
  formatHeight,
  formatSpecialWords,
  formatWeight,
} from '../../utils/utils';
import Container from '../Container';
import { SliderContainer, SliderValue } from '../Slider/styles';
import Tab, { TabContent, TabItem } from '../Tab';
import * as S from './styles';

interface CardPokemonDetailsProps {
  data: IPokemon;
}

const CardPokemonDetails = ({ data }: CardPokemonDetailsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const { name, types, id, height, weight, abilities, stats } = data;
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  const pokemonImageUrl = data.sprites.other.dream_world.front_default;
  const sumPower: number = data.stats.reduce(
    (prevStat, currStat) => prevStat + currStat.base_stat,
    0,
  );
  console.log(sumPower);

  const onTabSelected = (index: number) => {
    console.log(index);
    setSelectedTab(index);
  };

  return (
    <>
      <S.TopCard $bgColor={normalizedPokemonType}>
        <S.PokemonTitleExt>{capitalize(name)}</S.PokemonTitleExt>
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
          <S.SpacedRow>
            <span>Species</span>
            <span>?</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Height</span>
            <span>{formatHeight(height)}</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Weight </span>
            <span>{formatWeight(weight)}</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Abilities</span>
            <span>
              {abilities.map(pokemon => pokemon.ability.name).join(', ')}
            </span>
          </S.SpacedRow>
          <h3>Breeding</h3>
          <S.SpacedRow>
            <span>Gender</span>
            <span>?</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Egg groups</span>
            <span>?</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Egg Cycle</span>
            <span>?</span>
          </S.SpacedRow>
        </TabContent>
        <TabContent selectedTab={selectedTab} tabToShow={1}>
          {stats.map(pokemon => (
            <S.SpacedRow key={pokemon.stat.name}>
              <span>{capitalize(formatSpecialWords(pokemon.stat.name))}</span>
              {pokemon.base_stat}
              <SliderContainer>
                <SliderValue
                  $fillColor={normalizedPokemonType}
                  $value={pokemon.base_stat}
                />
              </SliderContainer>
            </S.SpacedRow>
          ))}
          <S.SpacedRow>
            <span>Total</span>
            {sumPower}
            <SliderContainer>
              <SliderValue
                $fillColor={normalizedPokemonType}
                $value={sumPower / 6}
              />
            </SliderContainer>
          </S.SpacedRow>
        </TabContent>
      </S.LowerCard>
    </>
  );
};

export default CardPokemonDetails;
