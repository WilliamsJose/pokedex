import CardPokemon from './components/CardPokemon';
import Container from './components/Container';

function App() {
  console.log('app rendered');

  return (
    <Container>
      <CardPokemon
        name="Bulbasaur"
        urlImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        types={[{ type: { name: 'Grass' } }, { type: { name: 'Poison' } }]}
      />
    </Container>
  );
}

export default App;
