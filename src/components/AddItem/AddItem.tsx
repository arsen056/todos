import React, {ChangeEvent, FC, useState} from 'react';

interface Props {
  addItem: (title: string) => void
}

export const AddItem:FC<Props> = ({addItem}) => {
  const [value, setValue] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    addItem(value);
    setValue('');
  };

  return (
    <div>
      <input value={value} onChange={onChangeHandler} type="text"/>
      <button onClick={onClickHandler}>+</button>
    </div>
  );
};
