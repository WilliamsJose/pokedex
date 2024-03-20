import CardPokemonDetails from './components/CardPokemonDetails';
import { AppUseCase } from './useCases';

function App() {
  const { data, isLoading, error } = AppUseCase();
  console.log('app rendered');
  if (error) {
    console.error(error);
  }

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {data && <CardPokemonDetails data={data} />}
    </>
  );
}

export default App;
