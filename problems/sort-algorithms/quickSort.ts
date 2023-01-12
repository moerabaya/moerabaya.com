import { swap } from "problems/utils/sort";

/**
 * Moves all smaller numbers to the left of start
 * @param arr
 * @param start
 * @param end
 * @returns index of swaped number
 */
const pivot = (
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length - 1
): number => {
  let pivot = arr[start];
  let swapIdx = start;
  for (var i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

/**
 * Devid and conquer algorithm, picks an element as a pivot and partitions the given array around the picked pivot.
 * @param arr
 * @param left
 * @param right
 * @returns sorted array of numbers
 */
const quickSort = (
  arr: Array<number>,
  left: number = 0,
  right: number = arr.length
): Array<number> => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx, right);
  }
  return arr;
};

export default quickSort;
