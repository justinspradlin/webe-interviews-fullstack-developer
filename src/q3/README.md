### Challenge:

You are given an array of strings representing a list of tasks. Each task is represented by a string that contains the
task name and the time it takes to complete the task separated by a space. The time is represented in minutes. Your task
is to implement a function `getTotalTime(tasks: string[]): number` that calculates the total time it would take to
complete all the tasks, considering that each task can only be started after the previous one is completed.

### Function Signature

```typescript
function getTotalTime(tasks: string[]): number {
  // Implementation here
}
```

Write a TypeScript function `getTotalTime` that takes in the following parameter:

```
tasks: string[] - An array of strings representing the tasks. Each string contains the task name and the time it takes to complete the task separated by a space. (1 <= tasks.length <= 10^5)
```

The function should return:

```
number - The total time it would take to complete all the tasks.
```

### Examples:

```typescript
const tasks1 = ["task1 10", "task2 5", "task3 8"];
const total1 = getTotalTime(tasks1);
console.log(total1); // Output: 23

const tasks2 = ["task1 5", "task2 3", "task3 7", "task4 2"];
const total2 = getTotalTime(tasks2);
console.log(total2); // Output: 17

const tasks3 = [];
const total3 = getTotalTime(tasks2);
console.log(total3); // Output: 0
```

### Notes:

* The tasks array will either be `empty` or always contain valid strings in the format `<task_name> <time_in_minutes>`.
* The total time should be calculated by adding the time taken for each task in the order they appear in the array, as
  each task can only be started after the previous one is completed.
* The time taken for each task is represented as a positive integer in minutes.
* Tasks with the same name can exist, only regard the one with the highest time... eg, `task1 3`, `task2 4`, `task1 1`
  => The answer will be `7`, seeing that `3` is greater than `1`, we discard the entry with the lower time `(task1 1)`.
