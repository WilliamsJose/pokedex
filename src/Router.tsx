import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from 'react-router-dom';
import App from './App';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import PokemonDetails from './pages/PokemonDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/"
        loader={() => {
          return redirect('/page/1');
        }}
        errorElement={<NotFound />}
      />
      <Route
        path="/page/:page"
        element={<HomePage />}
        errorElement={<NotFound />}
      />
      <Route
        path="/pokemon/:pokemonId"
        element={<PokemonDetails />}
        errorElement={<NotFound />}
      />

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" action={logoutUser} />
      </Route> */}
    </Route>,
  ),
);

export default router;
