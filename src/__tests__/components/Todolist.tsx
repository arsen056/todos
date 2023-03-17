import {render} from '@testing-library/react';
import {TodoList} from 'components/TodoList/TodoList';
import {AppProvider} from 'app/context/AppProvider';
import {TodosType} from 'common/types';
import uuid from 'react-uuid';

const State: TodosType = {
  title: 'Todos',
  filter: 'all',
  tasks: [
    {id: uuid(), title: 'React', isDone: false},
    {id: uuid(), title: 'Html', isDone: false},
    {id: uuid(), title: 'Css', isDone: false},
    {id: uuid(), title: 'JS', isDone: true}]
};

describe('Todolist', () => {
  it('Should be render todolist', () => {
    const view = render(
      <AppProvider initState={State}>
        <TodoList />
      </AppProvider>
    );    
    expect(view).toMatchSnapshot();
  });

  it('Should create todolist with empty todos', () => {
    const view = render(
      <AppProvider initState={{...State, tasks: []}}>
        <TodoList />
      </AppProvider>
    );

    expect(view).toMatchSnapshot();
  });

  it('Should create todolist with filter active', () => {
    const view = render(
      <AppProvider initState={{...State, filter: 'active'}}>
        <TodoList />
      </AppProvider>
    );
    expect(view).toMatchSnapshot();
  });

  it('Should create todolist with filter completed', () => {
    const view = render(
      <AppProvider initState={{...State, filter: 'completed'}}>
        <TodoList />
      </AppProvider>
    );
    expect(view).toMatchSnapshot();
  });
});
