import {getTotalTime} from '../q3'

describe('getTotalTime', () => {
  it('should return the correct total time for a list of tasks', () => {
    const tasks1 = ["task1 10", "task2 5", "task3 8"];
    const total1 = getTotalTime(tasks1);
    expect(total1).toBe(23);

    const tasks2 = ["task1 5", "task2 3", "task3 7", "task4 2"];
    const total2 = getTotalTime(tasks2);
    expect(total2).toBe(17);

    const tasks3 = ["task1 15", "task2 20", "task3 10"];
    const total3 = getTotalTime(tasks3);
    expect(total3).toBe(45);

    const tasks4 = ["task1 5", "task2 10", "task3 5", "task4 5", "task5 5"];
    const total4 = getTotalTime(tasks4);
    expect(total4).toBe(30);
  });

  it('should return 0 for an empty tasks list', () => {
    const tasks: string[] = [];
    const total = getTotalTime(tasks);
    expect(total).toBe(0);
  });

  it('should return the correct total time for a single task', () => {
    const tasks: string[] = ["task1 10"];
    const total = getTotalTime(tasks);
    expect(total).toBe(10);
  });

  it('should handle tasks with zero time correctly', () => {
    const tasks: string[] = ["task1 0", "task2 5", "task3 0"];
    const total = getTotalTime(tasks);
    expect(total).toBe(5);
  });

  it('should handle large number of tasks efficiently', () => {
    const tasks: string[] = Array.from({length: 100000}, (_, i) => `task${i + 1} ${i + 1}`);
    const total = getTotalTime(tasks);
    expect(total).toBe(5000050000);
  });

  /*EDGE CASES*/

  it('should handle tasks with large time values correctly', () => {
    const tasks: string[] = ["task1 1000", "task2 500", "task3 2000", "task4 1500"];
    const total = getTotalTime(tasks);
    expect(total).toBe(5000);
  });

  it('should handle tasks with decimal time values correctly', () => {
    const tasks: string[] = ["task1 0.5", "task2 1.5", "task3 2.25", "task4 0.75"];
    const total = getTotalTime(tasks);
    expect(total).toBeCloseTo(5, 5);
  });

  it('should handle tasks with duplicate names correctly', () => {
    const tasks: string[] = ["task1 5", "task2 10", "task1 7", "task3 3"];
    const total = getTotalTime(tasks);
    expect(total).toBe(20);
  });

});
