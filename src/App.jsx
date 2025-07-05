import { useState, useEffect } from 'react';
import './App.css';

import { bubbleSort } from './Sorting/bubbleSort';
import { mergeSort } from './Sorting/mergeSort';
import { linearSearch } from './Sorting/linearSearch';

function App() {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [searchTarget, setSearchTarget] = useState(50);

  const generateArray = () => {
    const arr = Array.from({ length: 30 }, () => ({
      value: Math.floor(Math.random() * 200) + 20,
    }));
    setArray(arr);
  };

  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="container">
      <h1>Sorting & Searching Visualizer</h1>

      <div className="bar-container">
        {array.map((item, idx) => (
          <div
            key={idx}
            className={`bar ${item.highlight || ''}`}
            style={{
              height: `${item.value}px`,
            }}
          >
            {item.value}
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={generateArray} disabled={isSorting}>
          Generate Array
        </button>

        <button
          onClick={() => bubbleSort(array, setArray, setIsSorting)}
          disabled={isSorting}
        >
          Bubble Sort
        </button>

        <button
          onClick={() => mergeSort(array, setArray, setIsSorting)}
          disabled={isSorting}
        >
          Merge Sort
        </button>

        <input
          type="number"
          value={searchTarget}
          onChange={(e) => setSearchTarget(Number(e.target.value))}
          disabled={isSorting}
          style={{ padding: '10px', borderRadius: '5px', width: '80px' }}
        />

        <button
          onClick={() =>
            linearSearch(array, searchTarget, setArray, setIsSorting)
          }
          disabled={isSorting}
        >
          Linear Search
        </button>
      </div>
    </div>
  );
}

export default App;
