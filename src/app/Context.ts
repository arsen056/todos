import {createContext} from 'react';
import {ContextData} from 'types';

export const AppContext = createContext<ContextData>({
  todos: [],
  setTodos: () => {
  }
});

export const AppProvider = AppContext.Provider;