import { findLongestSubarray } from '../q4/'; // Import the implementation function from the actual implementation file

describe('findLongestSubarray', () => {
  it('should return the correct indices for the longest subarray with sum less than or equal to target', () => {
    const arr = [1, 4, 3, 6, 8, 2];
    const target = 12;
    const result = findLongestSubarray(arr, target);
    expect(result).toEqual([0, 2]);
  });

  it('should return the correct indices for the longest subarray with sum less than or equal to target when multiple subarrays have same length', () => {
    const arr = [1, 4, 3, 6, 8, 2];
    const target = 14;
    const result = findLongestSubarray(arr, target);
    expect(result).toEqual([0, 3]);
  });

  it('should return null when no subarray has sum less than or equal to target', () => {
    const arr = [1, 4, 3, 6, 8, 2];
    const target = 0;
    const result = findLongestSubarray(arr, target);
    expect(result).toBeNull();
  });

  it('should return null when input array is empty', () => {
    const arr: number[] = [];
    const target = 5;
    const result = findLongestSubarray(arr, target);
    expect(result).toBeNull();
  });

  it('should return null when all elements in input array are greater than target', () => {
    const arr = [10, 20, 30, 40];
    const target = 5;
    const result = findLongestSubarray(arr, target);
    expect(result).toBeNull();
  });

  it('should return null when target is negative and all elements in input array are positive', () => {
    const arr = [1, 2, 3, 4, 5];
    const target = -10;
    const result = findLongestSubarray(arr, target);
    expect(result).toBeNull();
  });
});
