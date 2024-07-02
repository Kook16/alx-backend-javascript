export default function getListStudentIds(array) {
  if (Array.isArray(array) === false) {
    return [];
  }
  const idArray = [];
  for (const item of array) {
    idArray.push(item.id);
  }
  return idArray;
}
