import { swap } from "problems/utils/sort";

const bubbleSort = (array: number[]) => {
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        array = swap(array, i, j);
      }
    }
  }
  return array;
};

export default bubbleSort;
