function findFirstRepeated(gifts) {
  const giftMap = {};

  for (const gift of gifts) {
    if (giftMap[gift] !== undefined) {
      return gift;
    }
    giftMap[gift] = 0;
  }
  return -1;
}
