/**
 * Prompt
 * In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

  Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

  A gift can be made if we have all the necessary materials to make it.
 */

function manufacture(gifts, materials) {
  const materialsMap = {};
  const possibleGifts = [];
  for (const material of materials) {
    if (materialsMap[material] !== undefined) {
      ++materialsMap[material];
    } else {
      materialsMap[material] = 1;
    }
  }

  for (const gift of gifts) {
    let canBeMade = true;
    for (const char of gift) {
      if (materialsMap[char] === undefined || materialsMap[char] <= 0) {
        canBeMade = false;
        break;
      }
    }
    if (canBeMade) {
      possibleGifts.push(gift);
    }
  }
  return possibleGifts;
}
