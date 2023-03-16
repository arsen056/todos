import {FilterType} from 'types/FilterType';
import {TaskType} from 'types/TaskType';

export type TodoType = {
  id: string
  title: string
  filter: FilterType,
  tasks: TaskType[]
}