### Challenge: Find Longest Sub-Array

You are given an array of integers, and you need to implement a function that finds and returns the longest subarray
with a sum less than or equal to a given target value.

Your function should return the starting and ending indices of the subarray. If multiple sub-arrays have the same
maximum length, return the one with the smallest starting index.

### Function Signature:

```typescript
function findLongestSubarray(arr: number[], target: number): [number, number] | null {
  // Implementation goes here
}
```

#### Input:

* An array of integers `arr` *(1 <= arr.length <= 10^5)* representing the input array of integers.
* An integer `target` *(-10^9 <= target <= 10^9)* representing the target value for the sum of subarray.

#### Output:
Return a tuple `[start, end]` representing the starting and ending indices of the longest subarray with a sum less than or
equal to the target value. If no such subarray exists, return `null`.


### Example:

```typescript
const arr = [1, 4, 3, 6, 8, 2];
const target = 12;
const result = findLongestSubarray(arr, target);

console.log(result); // Output: [0, 2] (The subarray [1, 4, 3] has a sum of 8, which is less than the target value of 12, and it is the longest subarray with a sum less than or equal to the target value.)

```

```typescript
const arr = [1, 4, 3, 6, 8, 2];
const target = 5;
const result = findLongestSubarray(arr, target);

console.log(result); // Output: [1, 2] (The subarray [4, 3] has a sum of 7, which is less than the target value of 5, and it is the longest subarray with a sum less than or equal to the target value.)

```

```typescript
const arr = [1, 4, 3, 6, 8, 2];
const target = 0;
const result = findLongestSubarray(arr, target);

console.log(result); // Output: null (There is no subarray with a sum less than or equal to the target value of 0.)

```
