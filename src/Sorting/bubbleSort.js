export const bubbleSort = async (arr, setArray, setIsSorting) => {
  setIsSorting(true);
  let temp = [...arr];
  let n = temp.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (temp[j] > temp[j + 1]) {
        [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];
        setArray([...temp]);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    }
  }

  setIsSorting(false);
};
