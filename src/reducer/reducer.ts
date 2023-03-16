import {FilterType, TaskType, TodosType} from 'types';
import uuid from 'react-uuid';

export const initState: TodosType = {
  title: 'Todos',
  filter: 'all',
  tasks: [
    {id: uuid(), title: 'React', isDone: false},
    {id: uuid(), title: 'Html', isDone: false},
    {id: uuid(), title: 'Css', isDone: false},
    {id: uuid(), title: 'JS', isDone: false}]
};

export const reducer = (state: TodosType, action: actionsType): TodosType => {
  switch (action.type) {
  case 'ADD_TASK':
    return {...state, tasks: [action.task, ...state.tasks]};
  case 'CHANGE_STATUS':
    return {...state, tasks: state.tasks.map(t => t.id === action.id ? {...t, isDone: action.isDone} : t)};
  case 'DELETE_TASK':
    return {...state, tasks: state.tasks.filter(t => t.id !== action.id)};
  case 'CHANGE_FILTER':
    return {...state, filter: action.filter};
  default:
    return state;
  }
};

type actionsType = ReturnType<typeof addTask> 
  | ReturnType<typeof changeStatus>
  | ReturnType<typeof deleteTask>
  | ReturnType<typeof changeFilter>

export const addTask = (task: TaskType) => ({type: 'ADD_TASK', task} as const);
export const changeStatus = (id: string, isDone: boolean) => ({type: 'CHANGE_STATUS', id, isDone} as const);
export const deleteTask = (id: string) => ({type: 'DELETE_TASK', id} as const);
export const changeFilter = (filter: FilterType) => ({type: 'CHANGE_FILTER', filter} as const);