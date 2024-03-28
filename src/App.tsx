import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const App = () => (
  <>
    <Header />
    <ToastContainer stacked limit={3} closeOnClick />
    <Outlet />
    <Analytics />
    <SpeedInsights />
  </>
);

export default App;
