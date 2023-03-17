import React, {ComponentProps, FC, memo} from 'react';

import s from './Button.module.css';

export const Button: FC<ComponentProps<'button'>> = memo(({className, ...rest}) => {
  return (
    <button className={`${s.button} ${className}`} {...rest}/>
  );
});
