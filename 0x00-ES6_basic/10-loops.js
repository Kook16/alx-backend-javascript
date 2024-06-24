//  for of does not give access to idx of elems: disable es6
export default function appendToEachArrayValue(array, appendString) {
  const temp = [];
  for (const idx of array) {
    temp.push(appendString + idx);
  }
  return temp;
}
