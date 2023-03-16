import React, {ChangeEvent, FC, useContext} from 'react';
import {Context} from 'app/context/Context';
import {changeStatus, changeTaskTitle, deleteTask} from 'reducer/reducer';
import {EditableSpan} from 'components/EditableSpan/EditableSpan';

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

  const changeTitle = (title: string) => {
    dispatch(changeTaskTitle(id, title));
  };

  const deleteTaskHandler = () => dispatch(deleteTask(id));

  return (
    <li>
      <input onChange={changeStatusHandler} checked={isDone} type="checkbox"/>
      <EditableSpan title={title} changeTitle={changeTitle}/>
      <button onClick={deleteTaskHandler}>x</button>
    </li>
  );
};
