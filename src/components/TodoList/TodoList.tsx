import React, {useContext} from 'react';
import {FilterType, TaskType} from 'types';
import {Task} from 'components/Task/Task';
import {Context} from 'app/context/Context';
import {addTask, changeFilter} from 'reducer/reducer';
import {AddItem} from 'components/AddItem/AddItem';
import uuid from 'react-uuid';
import {getFilteredTasks} from 'utils/getFilteredTasks';
import {ButtonGroup} from 'components/ButtonGroup/ButtonGroup';

import s from './TodoList.module.css';

export const TodoList = () => {

  const {todos, dispatch} = useContext(Context);
  
  const filteredTasks = getFilteredTasks(todos.filter, todos.tasks);

  const tasksMap = filteredTasks.map(t => <Task key={t.id} id={t.id} title={t.title} isDone={t.isDone} />);

  const addNewTask = (title: string) => {
    const newTask: TaskType = {id: uuid(), title, isDone: false};
    dispatch(addTask(newTask));
  };

  const editFilter = (filter: FilterType) => dispatch(changeFilter(filter));

  return (
    <div className={s.todoList}>
      <h2 className={s.title}>{todos.title}</h2>
      <AddItem addItem={addNewTask}/>
      <ButtonGroup editFilter={editFilter}/>
      <ul>
        {tasksMap}
      </ul>
    </div>
  );
};
