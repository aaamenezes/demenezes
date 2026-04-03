export function capitalize(text: string) {
  return text
    .split(' ')
    .map(word => {
      const initial = word.charAt(0).toUpperCase();
      const remaining = word.slice(1).toLowerCase();
      const completeWord = initial + remaining;
      return completeWord;
    })
    .join(' ');
}
