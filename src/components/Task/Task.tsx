import React, {ChangeEvent, FC, useContext} from 'react';
import {Context} from 'app/context/Context';
import {changeStatus, deleteTask} from 'reducer/reducer';

type Props = {
  id: string
  title: string
  isDone: boolean
}
export const Task:FC<Props> = ({id, title, isDone}) => {

  const {dispatch} = useContext(Context);

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(id, e.target.checked));
  };

  const deleteTaskHandler = () => dispatch(deleteTask(id));

  return (
    <li>
      <input onChange={changeStatusHandler} checked={isDone} type="checkbox"/>
      <span>{title}</span>
      <button onClick={deleteTaskHandler}>x</button>
    </li>
  );
};
