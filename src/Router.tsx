import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import CardPokemonDetails from './components/CardPokemonDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/page/:page" element={<HomePage />} />
      <Route path="/details/:pokemonId" element={<CardPokemonDetails />} />

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" action={logoutUser} />
      </Route> */}
    </Route>,
  ),
);

export default router;
