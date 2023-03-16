import React, {FC} from 'react';

import {TaskType, TodoType} from 'types';

import {Task} from 'components/Task/Task';

import {useAppContext} from 'hooks/useAppContext';

import s from './TodoList.module.css';



type Props = {
  title: string
  tasks: TaskType[]
  setTodos: (todos: TodoType[]) => void
}

export const TodoList: FC<Props> = ({title, tasks, setTodos}) => {

  const { todos } = useAppContext();


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