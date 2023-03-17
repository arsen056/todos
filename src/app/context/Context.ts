import {createContext} from 'react';
import {ContextType} from 'common/types';

export const Context = createContext<ContextType>({} as ContextType);