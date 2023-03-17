import React, {FC, ReactNode, useReducer} from 'react';
import {State, reducer} from 'reducer/reducer';
import {Context} from 'app/context/Context';
import {TodosType} from 'common/types';

interface Props {
  children: ReactNode
  initState?: TodosType
}

export const AppProvider:FC<Props> = ({children, initState}) => {
  const RootState = initState ? initState : State;

  const [todos, dispatch] = useReducer(reducer, RootState);

  return (
    <Context.Provider value={{todos, dispatch}}>
      {children}
    </Context.Provider>
  );
};
