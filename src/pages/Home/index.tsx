import CardPokemon from '../../components/CardPokemon';
import Pagination from '../../components/Pagination';
import { IPokemon } from '../../domain';
import { HomeUseCase } from '../../useCases';
import * as S from './styles';

function HomePage() {
  const { data, isLoading, onPageChange, totalPages, page } = HomeUseCase();
  const pokemonsList = data?.results as IPokemon[];

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <S.ContainerExt>
        {pokemonsList &&
          pokemonsList.map(pokemon => (
            <CardPokemon key={pokemon.name} name={pokemon.name} />
          ))}
      </S.ContainerExt>
      <Pagination
        onPageChange={onPageChange}
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
}

export default HomePage;
