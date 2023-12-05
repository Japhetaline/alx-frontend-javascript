const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [s, m] of items.entries()) {
    if (m === 1) {
      items.set(s, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
