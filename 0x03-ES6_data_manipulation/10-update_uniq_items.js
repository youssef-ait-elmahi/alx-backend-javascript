export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const item of map) {
    if (item[1] === 1) {
      map.set(item[0], 100);
    }
  }
  return map;
}
