import CardPokemon from '../../components/CardPokemon';
import { IPokemon } from '../../domain';
import { HomeUseCase } from '../../useCases';
import * as S from './styles';

function HomePage() {
  const { data, isLoading } = HomeUseCase();
  const pokemonList = data?.results as IPokemon[];

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <S.ContainerExt>
        {pokemonList &&
          pokemonList.map(pokemon => (
            <CardPokemon key={pokemon.name} name={pokemon.name} />
          ))}
      </S.ContainerExt>
    </div>
  );
}

export default HomePage;
