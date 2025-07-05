export const mergeSort = async (arr, setArray, setIsSorting) => {
  setIsSorting(true);
  await mergeSortHelper([...arr], 0, arr.length - 1, setArray);
  setIsSorting(false);
};

const mergeSortHelper = async (arr, left, right, setArray) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  await mergeSortHelper(arr, left, mid, setArray);
  await mergeSortHelper(arr, mid + 1, right, setArray);
  await merge(arr, left, mid, right, setArray);
};

const merge = async (arr, left, mid, right, setArray) => {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
    setArray([...arr]);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
};
