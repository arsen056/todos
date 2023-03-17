import React, {FC, memo, useCallback, useState} from 'react';
import {FilterType} from 'common/types';
import {Button} from 'components/Button/Button';

import s from './ButtonGroup.module.css';

type Props = {
  editFilter: (filter: FilterType) => void
  clearCompleted: () => void
}

export const ButtonGroup:FC<Props> = memo(({editFilter, clearCompleted}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const onClickHandler = useCallback((filter: FilterType) => {
    editFilter(filter);
    setFilter(filter);
  }, [editFilter]) ;

  const clearCompletedHandler = useCallback(() => clearCompleted(),[clearCompleted]);

  return (
    <div className={s.group}>
      <Button className={filter === 'all' ? s.active : ''} onClick={() => onClickHandler('all')}>all</Button>
      <Button className={filter === 'active' ? s.active : ''} onClick={() => onClickHandler('active')}>active</Button>
      <Button className={filter === 'completed' ? s.active : ''} onClick={() => onClickHandler('completed')}>completed</Button>
      <Button onClick={clearCompletedHandler}>Clear</Button>
    </div>
  );
});
