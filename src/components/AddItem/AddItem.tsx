import React, {ChangeEvent, FC, useState, KeyboardEvent, memo} from 'react';
import {Input} from 'components/Input/Input';
import {Button} from 'components/Button/Button';

import s from './AddItem.module.css';

type Props = {
  addItem: (title: string) => void
}

export const AddItem:FC<Props> = memo(({addItem}) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      setError('');
    }
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    if (!value.trim()) {
      setError('Incorrect value');
      return;
    }
    addItem(value);
    setValue('');
    setError('');
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onClickHandler();
  };

  return (
    <div className={s.addItem}>
      <Input fullwidth={true} className={s.input} value={value} onChange={onChangeHandler} error={error} type="text"
        onKeyDown={onEnter}/>
      <Button className={s.button} onClick={onClickHandler}>+</Button>
    </div>
  );
});
