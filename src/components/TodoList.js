import TodoItem from "./TodoItem";
const TodoList = ({todos, handleChange,delTodo, setUpdate })=> {
    return (
<div>
           {todos.map((todo)=> {
           return <ul>
            
           <TodoItem  Key={todo.id} item={todo} handleChange ={handleChange }delTodo={delTodo}
           setUpdate={setUpdate} />
           </ul>
           })}
        </div>
    )
}
export default TodoList;