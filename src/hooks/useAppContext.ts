import {AppContext} from 'app/Context';
import {useContext} from 'react';

export const useAppContext = () => {
  const data = useContext(AppContext);

  if (!data) {
    throw new Error('Can not `useAppContext`, outside of the `AppProvider`');
  }

  return data;
}