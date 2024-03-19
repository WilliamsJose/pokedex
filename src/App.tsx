import CardPokemon from './components/CardPokemon';
import Container from './components/Container';
import './styles/App.css';

function App() {
  console.log('app rendered');

  return (
    <Container>
      <CardPokemon
        name="Bulbasaur"
        urlImage="https://i.pinimg.com/originals/8d/66/d9/8d66d96a9893ee18763d913767db869f.png"
        types={[{ type: { name: 'Grass' } }, { type: { name: 'Poison' } }]}
      />
    </Container>
  );
}

export default App;
