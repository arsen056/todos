import {FilterType, TaskType} from 'types';

export const getFilteredTasks = (filter: FilterType, tasks: TaskType[]): TaskType[]  => {
  switch (filter) {
  case 'active':
    return tasks.filter(t => !t.isDone);
  case 'completed':
    return tasks.filter(t => t.isDone);
  default:
    return tasks;
  }
};