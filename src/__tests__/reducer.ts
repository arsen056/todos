import {TaskType, TodosType} from 'types';
import {
  addTask,
  changeFilter,
  changeStatus,
  changeTaskTitle,
  changeTodoTitle,
  deleteTask,
  reducer
} from 'reducer/reducer';

let startState: TodosType;
let id: string;

beforeEach(() => {
  id = '3';
  startState = {
    title: 'Drinks',
    filter: 'all',
    tasks: [
      {id: '1', title: 'Cola', isDone: false},
      {id: '2', title: 'Pepsi', isDone: false},
      {id: '3', title: 'Water', isDone: false},
      {id: '4', title: 'Tea', isDone: true}
    ]
  };
});

test('Should be add a task', () => {
  const newTask: TaskType = {id: '5', title: 'Coffee', isDone: true};

  const endState = reducer(startState, addTask(newTask));

  expect(endState.tasks.length).toBe((5));
  expect(endState.tasks[0].title).toBe(('Coffee'));
});

test('Should be removed a task', () => {
  const endState = reducer(startState, deleteTask(id));

  expect(endState.tasks.length).toBe((3));
  expect(endState.tasks.find(t => t.id === id)).toBeUndefined();

});

test('Should be changed task title', () => {
  const newTitle = 'Coffee';
  const endState = reducer(startState, changeTaskTitle(id, newTitle));
  const changedTask = endState.tasks.find(t => t.id === id);

  expect(endState.tasks.find(t => t.title === 'Water')).toBeUndefined();
  expect(changedTask?.title).toBe(newTitle);

});

test('Should be changed task status', () => {
  const endState = reducer(startState, changeStatus(id, true));
  const changedTask = endState.tasks.find(t => t.id === id);

  expect(endState.tasks.length).toBe((4));
  expect(changedTask?.isDone).toBeTruthy();
});

test('Should be changed filter', () => {
  const endState = reducer(startState, changeFilter('active'));

  expect(endState.filter).toBe('active');
});

test('Should be changed todolist title', () => {
  const newTitle = 'Todos';
  const endState = reducer(startState, changeTodoTitle(newTitle));

  expect(endState.title).toBe(newTitle);
});