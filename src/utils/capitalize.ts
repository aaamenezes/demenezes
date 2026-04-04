function capitalizeBase(text: string, transformRest: (rest: string) => string) {
  const wordsArray = text.split(' ');

  const capitalizedWordsArray = wordsArray.map(word => {
    const initial = word.charAt(0).toUpperCase();
    const remaining = word.slice(1);
    const transformedRemaining = transformRest(remaining);
    const completeWord = initial + transformedRemaining;
    return completeWord;
  });

  const capitalizedText = capitalizedWordsArray.join(' ');

  return capitalizedText;
}

function fullText(text: string) {
  return capitalizeBase(text, rest => rest.toLowerCase());
}

function firstLetter(text: string) {
  return capitalizeBase(text, rest => rest);
}

export const capitalize = { fullText, firstLetter };
