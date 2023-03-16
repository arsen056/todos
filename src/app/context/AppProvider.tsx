import React, {FC, ReactNode, useReducer} from 'react';
import {initState, reducer} from 'reducer/reducer';
import {Context} from 'app/context/Context';

type Props = {
  children: ReactNode
}

export const AppProvider:FC<Props> = ({children}) => {
  const [todos, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{todos, dispatch}}>
      {children}
    </Context.Provider>
  );
};
