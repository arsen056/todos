import {Dispatch} from 'react';
import {TodosType} from 'types/TodosType';

export interface ContextType {
  todos: TodosType,
  dispatch: Dispatch<any>
}