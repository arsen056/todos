import React, {useContext, useState} from 'react';
import {FilterType} from 'common/types';
import {Button} from 'components/Button/Button';
import {Context} from 'app/context/Context';
import {changeFilter, clearCompleted} from 'reducer/reducer';

import s from './ButtonGroup.module.css';

export const ButtonGroup = () => {
  const {dispatch} = useContext(Context);

  const [filter, setFilter] = useState<FilterType>('all');

  const onClickHandler = (filter: FilterType) => {
    dispatch(changeFilter(filter));
    setFilter(filter);
  };

  const clearCompletedHandler = () => dispatch(clearCompleted());

  return (
    <div className={s.group}>
      <Button className={filter === 'all' ? s.active : ''} onClick={() => onClickHandler('all')}>all</Button>
      <Button className={filter === 'active' ? s.active : ''} onClick={() => onClickHandler('active')}>active</Button>
      <Button className={filter === 'completed' ? s.active : ''} onClick={() => onClickHandler('completed')}>completed</Button>
      <Button onClick={clearCompletedHandler}>Clear</Button>
    </div>
  );
};
