import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

const App = () => (
  <>
    <Header />
    <ToastContainer stacked limit={3} closeOnClick />
    <Outlet />
  </>
);

export default App;
