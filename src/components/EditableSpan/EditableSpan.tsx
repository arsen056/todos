import React, {ChangeEvent, FC, useState} from 'react';
import {Input} from 'components/Input/Input';

interface Props {
  changeTitle: (title: string) => void
  title: string
  className?: string
}

export const EditableSpan:FC<Props> = ({changeTitle, title, className}) => {
  const [value, setValue] = useState<string>(title);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const setEdit = () => setIsEdit(!isEdit);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!value) {
      setError('');
    }
    setValue(e.currentTarget.value);
  };

  const changeEditMode = () => {
    if (!value.trim()) {
      setError('Incorrect value');
      return;
    }
    changeTitle(value);
    setIsEdit(!isEdit);
  };

  return (
    isEdit
      ? <Input
        fullwidth={false}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={changeEditMode}
        autoFocus={true}
        error={error} />
      : <span className={className} onDoubleClick={setEdit}>{title}</span>
  );
};
