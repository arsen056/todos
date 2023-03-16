import React from 'react';
import {AppProvider} from 'app/context/AppProvider';
import {TodoList} from 'components/TodoList/TodoList';

function App() {
  
  return (
    <AppProvider>
      <div className="App">
        <TodoList />
      </div>
    </AppProvider>
  );
}

export default App;