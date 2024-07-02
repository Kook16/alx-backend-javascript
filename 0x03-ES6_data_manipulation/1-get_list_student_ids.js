export default (array) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((elems) => elems.id);
};
