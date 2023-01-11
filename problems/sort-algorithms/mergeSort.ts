//

const merge = (arr1: Array<number>, arr2: Array<number>) => {
  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer2 < arr2.length) {
    result.push(arr2[pointer2]);
    pointer2++;
  }

  while (pointer1 < arr1.length) {
    result.push(arr1[pointer1]);
    pointer1++;
  }

  return result;
};

const mergeSort = (arr: number[]): Array<number> => {
  if (arr.length <= 1) return arr;

  const half = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, half));
  const arr2 = mergeSort(arr.slice(half));

  return merge(arr1, arr2);
};

export default mergeSort;
