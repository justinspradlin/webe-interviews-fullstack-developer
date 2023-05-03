interface RangeInfo {
  startIndex: number;
  endIndex: number;
}

export function findLongestSubarray(
  arr: number[],
  target: number
): [number, number] | null {
  // console.log(arr, target);

  // Check to see if the target is negative, if the array has no negative numbers return null
  // In this case a match will never be found so avoid wasted processing time
  if (target < 0 && arr.findIndex(n => n < 0) === -1) {
    return null;
  }

  // Check to see if all the elements are greater than the target value
  // In this case a match will never be found so avoid wasted processing time
  if (arr.every(e => e > target)) {
    return null;
  }

  // Treat this as a sliding window over the array
  // Take a window (subset of numbers) and sum them together
  // Once we get a value <= target, increment the window size and start back at beginning
  // take a sample starting at position 0, if that works, move to next position.
  // if you reach the end of the array there were not any subsets and the last
  // Smallest sample woudl be 2 numbers
  let sampleSize = 2;
  let matchFound = false;
  let cursorPosition = 0;
  let lastValidRange: RangeInfo | null = null;

  while (!matchFound && cursorPosition + sampleSize - 1 < arr.length) {
    const endIndex = cursorPosition + sampleSize - 1;

    // check to see if this subset will extend beyond the bounds of the array
    // if so we have reached the end of the road for this value
    if (endIndex < arr.length) {
      const subset = arr.slice(cursorPosition, endIndex + 1);
      const total = subset.reduce((accumulator, value) => accumulator + value);

      // We have a valid subset for this array size
      // Increment to the next size and reset the cursor
      // then we can check the next size starting at beginning
      // no point in continuing the search because we have our first match
      if (total <= target) {
        // capture the start index of this valid subset
        lastValidRange = {
          startIndex: cursorPosition,
          endIndex: endIndex,
        } as RangeInfo;

        // console.log(`Setting last valid range as`, lastValidRange);

        // Reset cursor for next sample size test
        cursorPosition = 0;

        // Increment the sample size to try next bigest size
        sampleSize++;
      } else {
        // a valid subset was not found, advance the cursor position
        // console.log(
        //   `Busted value ${total} at cursorIndex: ${cursorPosition} to endIndex: ${endIndex}`,
        //   subset
        // );
        cursorPosition++;
      }
    }
  }

  const result =
    lastValidRange === null
      ? null
      : ([lastValidRange.startIndex, lastValidRange.endIndex] as [
          number,
          number
        ]);

  // console.log(`Calculated result`, result);

  return result;
}
