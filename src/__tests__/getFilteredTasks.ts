import {TaskType} from 'common/types';
import uuid from 'react-uuid';
import {getFilteredTasks} from 'common/utils/getFilteredTasks';

const tasks: TaskType[] = [
  {id: uuid(), title: 'React', isDone: false},
  {id: uuid(), title: 'Html', isDone: false},
  {id: uuid(), title: 'Css', isDone: false},
  {id: uuid(), title: 'JS', isDone: true}
];

test('Should be all tasks', () => {
  const filteredTasks = getFilteredTasks('all', tasks);
  expect(filteredTasks.length).toBe(4);
});

test('Should be active tasks', () => {
  const filteredTasks = getFilteredTasks('active', tasks);
  expect(filteredTasks.length).toBe(3);
});

test('Should be completed tasks', () => {
  const filteredTasks = getFilteredTasks('completed', tasks);
  expect(filteredTasks.length).toBe(1);
});