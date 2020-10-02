import React, {Suspense} from 'react';
import {
  useRecoilValue,
} from 'recoil';
import {filteredTodoListState, todoListState} from '../store/store.js';

import TodoListStats from './TodoListStats.js';
import TodoListFilters from './TodoListFilters.js';
import TodoItemCreator from './TodoItemCreator.js';
import TodoItem from './TodoItem.js';
import ConsoleLogs from './ConsoleLogs.js';


function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const todoListUnfiltered = useRecoilValue(todoListState);//we are using todoListState because we aren't going to be writing to it

  return(
    <div>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>
      <Suspense fallback={'Loading'}>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem}/>
        ))}
      </Suspense>
      <br></br>
      <br></br>
      {/* <ConsoleLogs/> */}
    </div>
  )
}

export default TodoList;