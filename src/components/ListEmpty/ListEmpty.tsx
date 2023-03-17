import React from 'react';

import s from './ListEmpty.module.css';

export const ListEmpty = () => {
  return (
    <h3 className={s.empty}>
      List empty...
    </h3>
  );
};
