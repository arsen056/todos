import {FilterType, TaskType, TodosType} from 'common/types';
import uuid from 'react-uuid';

export const initState: TodosType = {
  title: 'Todos',
  filter: 'all',
  tasks: [
    {id: uuid(), title: 'React', isDone: false},
    {id: uuid(), title: 'Html', isDone: false},
    {id: uuid(), title: 'Css', isDone: false},
    {id: uuid(), title: 'JS', isDone: true}]
};

export const reducer = (state: TodosType, action: actionsType): TodosType => {
  switch (action.type) {
  case 'ADD_TASK':
    return {...state, tasks: [action.task, ...state.tasks]};
  case 'CHANGE_STATUS':
    return {...state, tasks: state.tasks.map(t => t.id === action.id ? {...t, isDone: action.isDone} : t)};
  case 'CHANGE_TASK_TITLE':
    return {...state, tasks: state.tasks.map(t => t.id === action.id ? {...t, title: action.title} : t)};
  case 'DELETE_TASK':
    return {...state, tasks: state.tasks.filter(t => t.id !== action.id)};
  case 'CHANGE_FILTER':
    return {...state, filter: action.filter};
  case 'CHANGE_TODOLIST_TITLE':
    return {...state, title: action.title};
  case 'CLEAR_COMPLETED':
    return {...state, tasks: state.tasks.map(t => ({...t, isDone: false}))};
  default:
    return state;
  }
};

type actionsType = ReturnType<typeof addTask> 
  | ReturnType<typeof changeStatus>
  | ReturnType<typeof deleteTask>
  | ReturnType<typeof changeFilter>
  | ReturnType<typeof changeTaskTitle>
  | ReturnType<typeof changeTodoTitle>
  | ReturnType<typeof clearCompleted>

export const addTask = (task: TaskType) => ({type: 'ADD_TASK', task} as const);
export const changeStatus = (id: string, isDone: boolean) => ({type: 'CHANGE_STATUS', id, isDone} as const);
export const deleteTask = (id: string) => ({type: 'DELETE_TASK', id} as const);
export const changeFilter = (filter: FilterType) => ({type: 'CHANGE_FILTER', filter} as const);
export const changeTaskTitle = (id: string, title: string) => ({type: 'CHANGE_TASK_TITLE', id, title} as const);
export const changeTodoTitle = (title: string) => ({type: 'CHANGE_TODOLIST_TITLE', title} as const);
export const clearCompleted = () => ({type: 'CLEAR_COMPLETED'} as const);