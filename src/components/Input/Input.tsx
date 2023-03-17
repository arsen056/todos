import React, {ComponentProps, FC} from 'react';

import s from './Input.module.css';

type Props = {
  error?: string
  fullwidth: boolean
} & ComponentProps<'input'>

export const Input:FC<Props> = ({className, placeholder = 'Enter title', fullwidth, error, ...rest}) => {

  const errorClassName = error ? s.errorInput : '';
  const fullWidthClassName = fullwidth ? s.fullwidth : '';

  const inputClassName = `${s.input} ${className} ${errorClassName} ${fullWidthClassName}`;
  return (
    <span className={s.inputWrapper}>
      <input className={inputClassName} {...rest} placeholder={placeholder}/>
    </span>
  );
};
