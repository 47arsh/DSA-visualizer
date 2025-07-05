export const linearSearch = async (array, setArray, target) => {
  const bars = document.getElementsByClassName('bar');

  for (let i = 0; i < array.length; i++) {
    // Highlight current bar
    bars[i].style.backgroundColor = 'red';

    await new Promise(resolve => setTimeout(resolve, 150)); // Delay

    if (array[i] === target) {
      bars[i].style.backgroundColor = 'lime';
      alert(`Found ${target} at index ${i}`);
      return;
    }

    // Reset bar if not found
    bars[i].style.backgroundColor = 'gold';
  }

  alert(`${target} not found`);
};
