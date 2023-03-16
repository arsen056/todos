import React, {useState} from 'react';
import {AppProvider} from 'app/Context';
import {RootState} from 'app/RootState';
import {TodoList} from 'components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState(RootState);

  return (
    <AppProvider value={{todos, setTodos}}>
      <div className="App">
        <TodoList title={''} tasks={[]} setTodos={() => {}}/>
      </div>
    </AppProvider>
  );
}

export default App;