const TodoList = ({ todos }) => {
  return<ul className="List-group">
{todos.map((todo) => (
  <li class="list-group-item d-flex justify-content-between align-items-centre">{todo.title}
  <input type="checkbox" checked={todo.completed}/>
  
  </li>
))}
  </ul>
  
};
export default TodoList;