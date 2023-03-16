import React, {FC} from 'react';

type Props = {
  title: string
  isDone: boolean
}
export const Task:FC<Props> = ({title, isDone}) => {
  return (
    <li>
      <input checked={isDone} type="checkbox"/>
      <span>{title}</span>
    </li>
  );
};
