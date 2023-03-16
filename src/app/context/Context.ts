import {createContext} from 'react';
import {ContextType} from 'types';

export const Context = createContext<ContextType>({} as ContextType);