import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '200' }}> Transit API in PeopleLand</h2>
      </div>
      <div className="card">
        <button
          style={{ fontSize: '2rem', fontWeight: '600', color: 'red', border: '2px solid red' }}
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Count to increase number!
      </p>
    </>
  );
}

export default App;
