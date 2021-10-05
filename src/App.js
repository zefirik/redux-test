import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, fetchTodos } from './store/todoSlice';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const {status, error} = useSelector(state => state.todos);

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  };

  useEffect(()=> {
    dispatch(fetchTodos());
  },[dispatch]);

  return (
    <div className="App">
      <InputField 
        text={text}  
        handleInput={setText} 
        handleSubmit={addTask}
      />
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occerd:{error}</h2>}

      <TodoList/>
    </div>
  );
}

export default App;
