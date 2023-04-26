import React,{useState, useEffect} from 'react';
import Load from './components/loading';
import TodoList from './components/TodoList';

import axios from 'axios';

 function Fire () {
  const [todos, setTodos] = useState(null);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        setTodos(resp.data);
      });
    
  },[]);
  return(
    
<div>

</div>


  

  )
 }
 export default Fire