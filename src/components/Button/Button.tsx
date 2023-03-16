import React, {ComponentProps, FC} from 'react';

import s from './Button.module.css';

export const Button: FC<ComponentProps<'button'>> = ({className, ...rest}) => {
  return (
    <button className={`${s.button} ${className}`} {...rest}/>
  );
};
