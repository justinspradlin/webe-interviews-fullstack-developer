## Problem Statement

You are given a list of strings containing English words. Your task is to implement a function `groupAnagrams` that groups anagrams together and returns them as a nested array.

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase. For example, "listen" and "silent" are anagrams of each other.

Function signature:

```typescript
function groupAnagrams(words: string[]): string[][] {
  // Implementation goes here
}
```

### Example

```typescript
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
```

Expected output:
```typescript
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

## Constraints

* The input list of words will contain at most 10^4 words.
* The length of each word will be at most 100.
* The words will only contain lowercase English letters.

## Solution Requirements

Your solution should be implemented using TypeScript and should adhere to the following requirements:

* You may use any data structure that you think is appropriate to solve the problem.
* Your solution should be thoroughly tested and handle edge cases appropriately.
