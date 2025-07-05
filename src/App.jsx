import React, { useState, useEffect } from 'react';
import './App.css';
import { bubbleSort } from './Sorting/bubbleSort';
import { mergeSort } from './Sorting/mergeSort';
import { linearSearch } from './Sorting/linearSearch';

const App = () => {
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const generateArray = () => {
    const newArray = Array.from({ length: 30 }, () => Math.floor(Math.random() * 200) + 1);
    setArray(newArray);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const handleBubbleSort = async () => {
    setIsSorting(true);
    const sorted = await bubbleSort(array, setArray);
    setArray(sorted);
    setIsSorting(false);
  };

  const handleMergeSort = async () => {
    setIsSorting(true);
    const sorted = await mergeSort(array, setArray);
    setArray(sorted);
    setIsSorting(false);
  };

  const handleLinearSearch = async () => {
    setIsSorting(true);
    const target = parseInt(searchValue);
    if (!isNaN(target)) {
      await linearSearch(array, setArray, target);
    }
    setIsSorting(false);
  };

  return (
    <div className="container">
      <h1>DSA Visualizer</h1>
      <div className="bar-container">
        {array.map((value, index) => (
          <div
            className="bar"
            key={index}
            style={{ height: `${value * 2}px` }}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={generateArray} disabled={isSorting}>Generate Array</button>
        <button onClick={handleBubbleSort} disabled={isSorting}>Bubble Sort</button>
        <button onClick={handleMergeSort} disabled={isSorting}>Merge Sort</button>
      </div>

      <div className="search-input">
        <input
          type="number"
          placeholder="Enter number to search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={isSorting}
        />
        <button onClick={handleLinearSearch} disabled={isSorting || !searchValue}>
          Linear Search
        </button>
      </div>
    </div>
  );
};

export default App;
