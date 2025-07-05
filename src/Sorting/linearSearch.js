export const linearSearch = async (arr, target, setArray, setIsSorting) => {
  setIsSorting(true);
  let temp = arr.map(item => ({ ...item })); // deep copy

  for (let i = 0; i < temp.length; i++) {
    temp[i].highlight = 'checking';
    setArray([...temp]);
    await new Promise((resolve) => setTimeout(resolve, 300));

    if (temp[i].value === target) {
      temp[i].highlight = 'found';
      setArray([...temp]);
      await new Promise((resolve) => setTimeout(resolve, 500));
      break;
    }

    temp[i].highlight = null;
    setArray([...temp]);
  }

  setIsSorting(false);
};
