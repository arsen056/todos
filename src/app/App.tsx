import React, {useState} from 'react';
import {TodoList} from 'components/TodoList/TodoList';
import {TodoType} from 'types/TodoType';
import {TaskType} from 'types';

const tasksStateTodo: TaskType[] = [
  {id: '2123', title: 'React', isDone: false},
  {id: '2112323', title: 'Html', isDone: false},
  {id: '212sa3', title: 'Css', isDone: false},
  {id: '21asd23', title: 'JS', isDone: false},
];

function App() {

  const [todos, setTodos] = useState<TodoType[]>([
    {id: '1', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
    {id: '2', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
    {id: '3', title: 'Todos', filter: 'all', tasks: tasksStateTodo},
  ]);

  const todosMap = todos.map(t => <TodoList key={t.id} title={t.title} tasks={t.tasks}/>)

  return (
    <div className="App">
      {todosMap}
    </div>
  );
}

export default App;
