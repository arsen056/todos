import {TodoType} from 'types/TodoType';

export interface ContextData {
  todos: TodoType[],
  setTodos: (todos: TodoType[]) => void
}