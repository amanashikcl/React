import { useState } from 'react'

function App() {
  const [random, setRandom] = useState(0);

  return (
    <div>
      <h2>Random Number Generator</h2>
      <button onClick={() => setRandom(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
      <p>Random Number: {random}</p>
    </div>
  );
}

export default App
