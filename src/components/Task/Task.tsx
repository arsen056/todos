import React, {ChangeEvent, FC, useContext} from 'react';
import {Context} from 'app/context/Context';
import {changeStatus, changeTaskTitle, deleteTask} from 'reducer/reducer';
import {EditableSpan} from 'components/EditableSpan/EditableSpan';

import {Button} from 'components/Button/Button';

import s from './Task.module.css';

type Props = {
  id: string
  title: string
  isDone: boolean
}
export const Task: FC<Props> = ({id, title, isDone}) => {

  const {dispatch} = useContext(Context);

  const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(id, e.target.checked));
  };

  const changeTitle = (title: string) => {
    dispatch(changeTaskTitle(id, title));
  };

  const deleteTaskHandler = () => dispatch(deleteTask(id));

  const isCheckedClass = isDone ? s.checked : '';

  return (
    <li className={s.taskWrapper}>
      <div>
        <label className={`${s.task} ${isCheckedClass}`}>
          <input className={s.checkbox} onChange={changeStatusHandler} checked={isDone} type="checkbox"/>
          <span className={s.customCheckbox}></span>
        </label>
        <EditableSpan className={isCheckedClass} title={title} changeTitle={changeTitle}/>
      </div>

      <Button onClick={deleteTaskHandler}>x</Button>
    </li>
  );
};
