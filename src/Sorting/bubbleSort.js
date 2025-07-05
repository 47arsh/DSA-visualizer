export const bubbleSort = async (array, setArray) => {
  const arr = [...array];
  const bars = document.getElementsByClassName('bar');

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Highlight bars being compared
      bars[j].style.backgroundColor = 'red';
      bars[j + 1].style.backgroundColor = 'red';

      await new Promise(resolve => setTimeout(resolve, 100));

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]); // Trigger re-render
      }

      bars[j].style.backgroundColor = 'gold';
      bars[j + 1].style.backgroundColor = 'gold';
    }

    // Mark the last sorted element
    bars[arr.length - i - 1].style.backgroundColor = 'lime';
  }

  // Mark first element as sorted
  bars[0].style.backgroundColor = 'lime';

  return arr; // ✅ important: return the sorted array
};
