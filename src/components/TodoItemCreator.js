import { getByTestId } from '@testing-library/react';
import React, {useState} from 'react';
import {
  useSetRecoilState,
} from 'recoil';
// import getTvDataResource from 'wrapPromise.js';
import {todoListState} from '../store/store.js';



function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');//state only availible to this component
  const setTodoList = useSetRecoilState(todoListState);//we shouldnt have access to todoListState because it hasn't been imported unless recoil simply makes it avalible.
  

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;