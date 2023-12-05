const cleanSet = (set, startString) => Array.from(set).filter(
  (k) => typeof k === 'string' && k.startsWith(startString),
).map(
  (k) => k.slice(startString.length),
).join('-');

export default cleanSet;
