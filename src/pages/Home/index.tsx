import CardPokemon from '../../components/CardPokemon';
import FilterPokemon from '../../components/FilterPokemon';
import Pagination from '../../components/Pagination';
import { Title } from '../../components/Title/styles';
import { IPokemon } from '../../domain';
import { HomeUseCase } from '../../useCases';
import * as S from './styles';

function HomePage() {
  const { data, onPageChange, totalPages, page } = HomeUseCase();
  const pokemonsList = data?.results as IPokemon[];

  return (
    <S.HomeContainer>
      <Title>Pokedex</Title>
      <S.HomeListContainer>
        {pokemonsList &&
          pokemonsList.map(pokemon => (
            <CardPokemon key={pokemon.name} name={pokemon.name} />
          ))}
      </S.HomeListContainer>
      <Pagination
        onPageChange={onPageChange}
        currentPage={page}
        totalPages={totalPages}
      />
      <FilterPokemon />
    </S.HomeContainer>
  );
}

export default HomePage;
