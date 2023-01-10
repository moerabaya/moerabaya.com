export const swap = (array: number[], first: number, second: number) => {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
  return array;
};
