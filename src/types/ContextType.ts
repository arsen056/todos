import {Dispatch} from 'react';
import {TaskType} from 'types/TaskType';

export interface ContextType {
  todos: TaskType[],
  dispatch: Dispatch<any>
}