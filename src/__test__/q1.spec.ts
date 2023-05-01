import {groupAnagrams} from '../q1';

const prep = (input: string[][]) => input.map(v => v.sort())


describe('groupAnagrams', () => {
  it('should correctly group anagrams in a list of words', () => {
    const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expectedOutput = [
      ["ate", "eat", "tea"],
      ["nat", "tan"],
      ["bat"]
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words with no anagrams', () => {
    const words = ["hello", "world"];
    const expectedOutput = [
      ["hello"],
      ["world"]
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle an empty list of words', () => {
    const words: string[] = [];
    const expectedOutput: string[][] = [];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words with only one word', () => {
    const words = ["test"];
    const expectedOutput = [
      ["test"]
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words where all words are anagrams of each other', () => {
    const words = ["debitcard", "badcredit", "dinner", "redesign", "indoor"];
    const expectedOutput = [
      [
        "badcredit",
        "debitcard"
      ],
      [
        "dinner"
      ],
      [
        "redesign"
      ],
      [
        "indoor"
      ]
    ]

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words where all words have the same letters but different order', () => {
    const words = ["abc", "acb", "bac", "bca", "cab", "cba"];
    const expectedOutput = [
      ["abc", "acb", "bac", "bca", "cab", "cba"]
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words with very long anagrams', () => {
    const words = [
      'debcicltlmlyblxbzeuwiujfmsvcrpgpmncfjxomxrswnggkwkwzvqhyauqrr',
      'rrquayhqvzwkwkggnwsrxmoxjfcnmpgprcvsmfjuiwuezbxlbylmltlcicbed',
      'celbicthmlyblxbzeuwiujfmsvcrpgpmncfjxomxrswnggkwkwzvqhyauqrz'
    ];
    const expectedOutput = [
      ['debcicltlmlyblxbzeuwiujfmsvcrpgpmncfjxomxrswnggkwkwzvqhyauqrr', 'rrquayhqvzwkwkggnwsrxmoxjfcnmpgprcvsmfjuiwuezbxlbylmltlcicbed'],
      ['celbicthmlyblxbzeuwiujfmsvcrpgpmncfjxomxrswnggkwkwzvqhyauqrz']
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });

  it('should correctly handle a list of words with special characters', () => {
    const words = ['rat', 'art', 'tar', '#tra', '@tar'];
    const expectedOutput = [
      ['rat', 'art', 'tar'],
      ['#tra'],
      ['@tar']
    ];

    expect(prep(groupAnagrams(words))).toEqual(prep(expectedOutput));
  });
});
