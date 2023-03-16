import {TaskType, TodoType} from 'types';

const tasksStateTodo: TaskType[] = [
  {id: '2123', title: 'React', isDone: false},
  {id: '2112323', title: 'Html', isDone: false},
  {id: '212sa3', title: 'Css', isDone: false},
  {id: '21asd23', title: 'JS', isDone: false},
];

export const RootState: TodoType[] = [
  {id: '1', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
  {id: '2', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
  {id: '3', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
];
