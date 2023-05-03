/**
 * Calculates the total time for completing tasks.
 * @param tasks - Array of tasks in the format "taskName time" where time is a positive number.
 * @returns Total time for completing all tasks.
 */

interface Task {
  name: string;
  duration: number;
}

interface Dictionary<T> {
  [Key: string]: T;
}

export function getTotalTime(tasks: string[]): number {
  // Get the array of durations
  const taskList = tasks.map(parseTaskName);

  // Get a dictionary of max task time to avoid traversing the task list multiple times
  // when determining the max time for a task by task name
  const maxDurations = getMaxDurations(taskList);

  // for each task get the name then find the max for that name
  let totalDuration = 0 as number;
  taskList.forEach(taskItem => {
    // Based on the task name, get the max duration for the name,
    // if the duration is the maximum for the name, then increment
    // running total by that amount
    const maxDuration = maxDurations[taskItem.name];
    const isMaxDuration = maxDuration && maxDuration === taskItem.duration;
    if (isMaxDuration) {
      totalDuration += maxDuration;
    }
  });

  return totalDuration;
}

function parseTaskName(task: string): Task {
  // assume that the input will be in the valid format of "[NAME] [DURATION]"
  const regex = /(.+)\s+(\d+\.?\d*)/;

  const matches = task.match(regex);

  const parsedTask = {
    name: matches![1],
    duration: Number.parseFloat(matches![2]),
  } as Task;

  // Removed this brittle processing in favor of regex parsing
  // const durationIndexStart = task.lastIndexOf(' ');

  // // console.log(
  // //   'Finding task location of the task duration',
  // //   task,
  // //   durationIndexStart
  // // );
  // const taskDurationText = task.substring(durationIndexStart);
  // const parsedTask = {
  //   name: task.substring(0, durationIndexStart).trim(),
  //   duration: Number.parseFloat(taskDurationText),
  // } as Task;

  // console.log(`Parsed task ${task}`, parsedTask);

  return parsedTask;
}

function getMaxDurations(tasks: Task[]): Dictionary<number> {
  // Get list of unique tasks names
  const taskNames = tasks.map(item => item.name) as string[];

  // returns a hash dictionary of max durations using task name as the key
  const durationDictionary = {} as Dictionary<number>;
  taskNames.forEach(taskName => {
    const durations = tasks
      .filter(t => t.name === taskName)
      .map(t => t.duration)
      .sort()
      .reverse();

    durationDictionary[taskName] = durations.length > 0 ? durations[0] : 0;
  });

  return durationDictionary;
}
