/**
 * (12345, 0) => 5
 * @param number
 * @param index
 * @returns descending number of index
 */
const getDigit = (number: number, index: number): number =>
  Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;

/**
 * @param number
 * @returns count of passed number
 */
const digitCount = (number: number): number =>
  number === 0 ? 1 : Math.floor(Math.log10(Math.abs(number))) + 1;

/**
 * @param numbers
 * @returns largest count (length) of a number in an array
 */
const maxDigits = (numbers: Array<number>) => {
  let count = 0;
  numbers.map((item) => {
    count = Math.max(count, digitCount(item));
  });
  return count;
};

/**
 * Radix sort an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value
 * @param arr
 * @returns sorted array of numbers
 */
const radixSort = (arr: Array<number>): Array<number> => {
  const maxDigit = maxDigits(arr);
  for (var k = 0; k < maxDigit; k++) {
    let digitBuckets: Array<any> = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

export default radixSort;
