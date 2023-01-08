const swap = (array: number[], first: number, second: number) =>
  ([array[first], array[second]] = [array[second], array[first]]);

const selectionSort = (array: number[]) => {
  for (var i = 0; i < array.length; i++) {
    let lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(array, i, lowest);
  }
  return array;
};

export default selectionSort;
