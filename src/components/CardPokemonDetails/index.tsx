import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeBallSports from '../../assets/poke-ball-sports.svg';
import { IPokemonAbility, IPokemonStats, IPokemonType } from '../../domain';
import { useData } from '../../hooks/swr';
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

const CardPokemonDetails = () => {
  const { pokemonId } = useParams();
  const { data } = useData(`pokemon/${pokemonId}`);
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const { name, types, id, height, weight, abilities, stats } = data;
  const normalizedPokemonType = types[0].type.name.toLowerCase();
  const preferredImage = data?.sprites.other.dream_world.front_default;
  const pokemonImageUrl = preferredImage
    ? preferredImage
    : data?.sprites?.front_default;
  const sumPower: number = data?.stats.reduce(
    (prevStat: number, currStat: IPokemonStats) =>
      prevStat + currStat.base_stat,
    0,
  );
  const totalPowerPercentage = sumPower / 6;
  const baseStatPercentage = (stat: number) => (stat < 101 ? stat : 100);

  const onTabSelected = (index: number) => {
    setSelectedTab(index);
  };

  // defines bg color based on pokemon type
  useEffect(() => {
    document.getElementById('root')!.style.backgroundColor =
      `var(--color-${normalizedPokemonType})`;
    return () => {
      document.getElementById('root')!.style.backgroundColor = 'white';
    };
  }, [normalizedPokemonType]);

  return (
    <>
      <S.TopCard $bgColor={normalizedPokemonType}>
        <S.PokemonTitleExt>{capitalize(name)}</S.PokemonTitleExt>
        <S.PokemonId>#{String(id).padStart(3, '0')}</S.PokemonId>
        <Container>
          {types.map((pokemon: IPokemonType) => (
            <S.PokemonTypePillExt key={pokemon.type.name}>
              {pokemon.type.name}
            </S.PokemonTypePillExt>
          ))}
        </Container>
        <S.PokeBallImage src={PokeBallSports} />
      </S.TopCard>
      <S.LowerCard>
        {pokemonImageUrl ? (
          <S.PokemonImage src={pokemonImageUrl} />
        ) : (
          <S.PokemonNoImage size={120} />
        )}
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
            <span>Weight</span>
            <span>{formatWeight(weight)}</span>
          </S.SpacedRow>
          <S.SpacedRow>
            <span>Abilities</span>
            <span>
              {abilities
                .map((pokemon: IPokemonAbility) => pokemon.ability.name)
                .join(', ')}
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
          {stats.map((pokemon: IPokemonStats) => (
            <S.SpacedRow key={pokemon.stat.name}>
              <span>{capitalize(formatSpecialWords(pokemon.stat.name))}</span>
              <S.MarginSpan $value={pokemon.base_stat}>
                {pokemon.base_stat}
              </S.MarginSpan>
              <SliderContainer>
                <SliderValue
                  $fillColor={normalizedPokemonType}
                  $value={baseStatPercentage(pokemon.base_stat)}
                />
              </SliderContainer>
            </S.SpacedRow>
          ))}
          <S.SpacedRow>
            <span>Total</span>
            <span>{sumPower}</span>
            <SliderContainer>
              <SliderValue
                $fillColor={normalizedPokemonType}
                $value={totalPowerPercentage}
              />
            </SliderContainer>
          </S.SpacedRow>
        </TabContent>
      </S.LowerCard>
    </>
  );
};

export default CardPokemonDetails;
