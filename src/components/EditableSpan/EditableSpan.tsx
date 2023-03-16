import React, {ChangeEvent, FC, useState} from 'react';

interface Props {
  changeTitle: (title: string) => void
  title: string
}

export const EditableSpan:FC<Props> = ({changeTitle, title}) => {
  const [value, setValue] = useState<string>(title);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const setEdit = () => setIsEdit(!isEdit);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const changeEditMode = () => {
    changeTitle(value);
    setIsEdit(!isEdit);
  };

  return (
    isEdit
      ? <input type="text" value={value} onChange={onChange} onBlur={changeEditMode} autoFocus={true} />
      : <span onDoubleClick={setEdit}>{title}</span>
  );
};
