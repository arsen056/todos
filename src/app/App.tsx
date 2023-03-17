import React from 'react';
import {AppProvider} from 'app/context/AppProvider';
import {TodoList} from 'components/TodoList/TodoList';
import {Description} from 'components/Description/Description';

function App() {
  return (
    <AppProvider>
      <TodoList/>
      <Description/>
    </AppProvider>
  );
}

export default App;