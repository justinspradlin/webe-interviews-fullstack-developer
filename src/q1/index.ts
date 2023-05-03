interface Dictionary<T> {
  [Key: string]: T;
}

export function groupAnagrams(words: string[]): string[][] {
  // console.log(words);

  const dictionary = {} as Dictionary<string[]>;

  // Group every anagram by their unique anagram key
  words.forEach(word => {
    const key = getAnagramKey(word);
    let anagrams = dictionary[key] ?? ([] as string[]);
    anagrams.push(word);

    dictionary[key] = anagrams;
  });

  const results = Object.keys(dictionary).map(v => dictionary[v]);
  // console.log('Found the anagrams', results);
  return results;
}

function getAnagramKey(word: string): string {
  // sort the chars of the word and return the string
  return word?.split('').sort().join('');
}
