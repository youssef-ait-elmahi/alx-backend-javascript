export default function cleanSet(set, str) {
  if (str === undefined || str.length === 0) return '';
  return [...set]
    .filter((val) => (val ? val.startsWith(str) : ''))
    .map((val) => (val ? val.slice(str.length) : ''))
    .join('-');
}
