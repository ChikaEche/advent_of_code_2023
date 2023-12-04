function findNaughtyStep(original, modified) {
  for (let char = 0; char < original.length - 1; char++) {
    if (original.charAt(char) !== modified.charAt(char)) {
      if (original.charAt(char) === modified.charAt(char + 1)) {
        return modified.charAt(char);
      } else {
        return original.charAt(char);
      }
    }
  }

  if (modified.length > original.length) {
    const originalLength = original.length;
    return modified.charAt(originalLength);
  } else if (modified.length < original.length) {
    const modifiedLength = modified.length;
    return original.charAt(modifiedLength);
  }
  return "";
}
