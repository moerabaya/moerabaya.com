import { swap } from "../sort-algorithms/bubbleSort";

const insertionSort = (array: Array<number>) => {
  for (var i = 1; i < array.length; i++) {
    var currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
};
export default insertionSort;
