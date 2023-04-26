import {useState,useEffect} from 'react'
import Loading from './components/Loading';
import axios from 'axios'
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState(null);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {setTodos(resp.data)});
  },[]);

  return <div> { todos ? <TodoList todos={todos}/> : <Loading /> }</div> ;
}
export default  App 