import React, {useContext} from 'react';

import {TaskType} from 'types';

import {Task} from 'components/Task/Task';

import {Context} from 'app/context/Context';

import {addTask} from 'reducer/reducer';

import {AddItem} from 'components/AddItem/AddItem';

import s from './TodoList.module.css';

export const TodoList = () => {

  const {todos, dispatch} = useContext(Context);

  const tasksMap = todos.map(t => <Task title={t.title} isDone={t.isDone} />);

  const addNewTask = (title: string) => {
    const newTask: TaskType = {id: '1', title, isDone: false};
    dispatch(addTask(newTask));
  };

  return (
    <div className={s.todoList}>
      <h2>{'title'}</h2>
      <AddItem addItem={addNewTask}/>
      <ul>
        {tasksMap}
      </ul>
    </div>
  );
};