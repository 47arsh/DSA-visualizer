export const mergeSort = async (array, setArray) => {
  const bars = document.getElementsByClassName('bar');

  async function mergeSortHelper(arr, l, r) {
    if (l >= r) return;

    const mid = Math.floor((l + r) / 2);
    await mergeSortHelper(arr, l, mid);
    await mergeSortHelper(arr, mid + 1, r);
    await merge(arr, l, mid, r);
  }

  async function merge(arr, l, mid, r) {
    let left = arr.slice(l, mid + 1);
    let right = arr.slice(mid + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      // Visual feedback
      bars[k].style.backgroundColor = 'red';
      await new Promise(resolve => setTimeout(resolve, 100));

      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }

      setArray([...arr]); // Update UI
      bars[k].style.backgroundColor = 'gold';
      k++;
    }

    while (i < left.length) {
      bars[k].style.backgroundColor = 'red';
      await new Promise(resolve => setTimeout(resolve, 100));
      arr[k] = left[i];
      i++;
      setArray([...arr]);
      bars[k].style.backgroundColor = 'gold';
      k++;
    }

    while (j < right.length) {
      bars[k].style.backgroundColor = 'red';
      await new Promise(resolve => setTimeout(resolve, 100));
      arr[k] = right[j];
      j++;
      setArray([...arr]);
      bars[k].style.backgroundColor = 'gold';
      k++;
    }
  }

  const arr = [...array];
  await mergeSortHelper(arr, 0, arr.length - 1);

  // Optional: color all bars green at the end
  for (let i = 0; i < arr.length; i++) {
    bars[i].style.backgroundColor = 'lime';
  }

  return arr; // ✅ Return final sorted array
};
