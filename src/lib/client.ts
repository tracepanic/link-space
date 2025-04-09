export function getInitials(name: string): string {
  const wordArray = name.split(" ");
  if (wordArray.length === 0) {
    return "No name provided";
  }
  if (wordArray.length === 1) {
    return wordArray[0].charAt(0).toUpperCase();
  }

  const firstWord = wordArray[0];
  const secondWord = wordArray[1];
  return firstWord.charAt(0).toUpperCase() + secondWord.charAt(0).toUpperCase();
}
