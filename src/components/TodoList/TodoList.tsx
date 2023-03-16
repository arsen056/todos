import React, {FC} from 'react';

import {TaskType} from 'types';

import {Task} from 'components/Task/Task';

import s from './TodoList.module.css';


type Props = {
  title: string
  tasks: TaskType[]
}

export const TodoList: FC<Props> = ({title, tasks}) => {

  const tasksMap = tasks.map(t => <Task key={t.id} title={t.title} isDone={t.isDone} />);

  return (
    <div className={s.todoList}>
      <h2>{title}</h2>
      <ul>
        {tasksMap}
      </ul>
    </div>
  );
};