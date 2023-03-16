import React, {FC, useContext} from 'react';
import {Context} from 'app/context/Context';
import {changeStatus} from 'reducer/reducer';

type Props = {
  id: string
  title: string
  isDone: boolean
}
export const Task:FC<Props> = ({id, title, isDone}) => {

  const {dispatch} = useContext(Context);

  const changeStatusHandler = (e: any) => {
    dispatch(changeStatus(id, e.target.checked));
  };

  return (
    <li>
      <input onClick={changeStatusHandler} checked={isDone} type="checkbox"/>
      <span>{title}</span>
    </li>
  );
};
