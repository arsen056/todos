import React, {FC, useState} from 'react';
import {FilterType} from 'common/types';
import {Button} from 'components/Button/Button';

import s from './ButtonGroup.module.css';

type Props = {
  editFilter: (filter: FilterType) => void
}

export const ButtonGroup:FC<Props> = ({editFilter}) => {

  const [filter, setFilter] = useState<FilterType>('all');

  const onClickHandler = (filter: FilterType) => {
    editFilter(filter);
    setFilter(filter);
  };

  return (
    <div className={s.group}>
      <Button className={filter === 'all' ? s.active : ''} onClick={() => onClickHandler('all')}>all</Button>
      <Button className={filter === 'active' ? s.active : ''} onClick={() => onClickHandler('active')}>active</Button>
      <Button className={filter === 'completed' ? s.active : ''} onClick={() => onClickHandler('completed')}>completed</Button>
    </div>
  );
};
