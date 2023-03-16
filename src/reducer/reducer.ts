import {TaskType} from 'types';

export const initState: TaskType[] = [
  {id: '2123', title: 'React', isDone: false},
  {id: '2112323', title: 'Html', isDone: false},
  {id: '212sa3', title: 'Css', isDone: false},
  {id: '21asd23', title: 'JS', isDone: false},];

export const reducer = (state: TaskType[], action: ReturnType<typeof addTask>) => {
  switch (action.type) {
  case 'ADD_TASK':
    return [action.task, ...state];
  default:
    return state;
  }
};

export const addTask = (task: TaskType) => ({type: 'ADD_TASK', task});