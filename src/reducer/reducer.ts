import {TaskType} from 'types';

export const initState: TaskType[] = [
  {id: '2123', title: 'React', isDone: false},
  {id: '2112323', title: 'Html', isDone: false},
  {id: '212sa3', title: 'Css', isDone: false},
  {id: '21asd23', title: 'JS', isDone: false},];

export const reducer = (state: TaskType[], action: actionsType) => {
  switch (action.type) {
  case 'ADD_TASK':
    return [action.task, ...state];
  case 'CHANGE_STATUS':
    return state.map(t => t.id === action.id ? {...t, isDone: action.isDone} : t);
  case 'DELETE_TASK':
    return state.filter(t => t.id !== action.id);
  default:
    return state;
  }
};

type actionsType = ReturnType<typeof addTask> 
  | ReturnType<typeof changeStatus>
  | ReturnType<typeof deleteTask>

export const addTask = (task: TaskType) => ({type: 'ADD_TASK', task} as const);
export const changeStatus = (id: string, isDone: boolean) => ({type: 'CHANGE_STATUS', id, isDone} as const);
export const deleteTask = (id: string) => ({type: 'DELETE_TASK', id} as const);