import CardPokemonDetails from './components/CardPokemonDetails';

function App() {
  console.log('app rendered');

  return (
    <>
      <CardPokemonDetails
        name="Bulbasaur"
        urlImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        types={[
          { type: { name: 'Fire', url: '' }, slot: 0 },
          { type: { name: 'Poison', url: '' }, slot: 0 },
        ]}
      />
    </>
  );
}

export default App;
