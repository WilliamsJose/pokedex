import { useState } from 'react';
import './styles/App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);
  console.log('app rendered');

  return (
    <>
      <Button $primary onClick={() => setCount(count => count + 1)}>
        count is {count}
      </Button>
    </>
  );
}

export default App;
