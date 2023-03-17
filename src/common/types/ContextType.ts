import {Dispatch} from 'react';
import {TodosType} from 'common/types/TodosType';

export interface ContextType {
  todos: TodosType,
  dispatch: Dispatch<any>
}