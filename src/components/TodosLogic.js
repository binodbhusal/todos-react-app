import { v4 as uuidv4 } from "uuid";
import  React, { useState } from "react";
import TodosList from "./TodoList";
import InputTodo from "./InputTodo";
const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id:uuidv4(),
            title:'Setup dvelopment environment',
            completed:true
        },
        {
            id:uuidv4(),
            title:'Develop website and add content',
            completed:false
        },
        {
            id:uuidv4(),
            title:'Deploy to live server',
            completed:true
        }
    ]);
    const handleChange = (id) => {
        setTodos((prevState)=> 
        prevState.map((todo) => {
            if(todo.id===id){
                return {
                    ...todo,
                    Completed: !todo.completed,
                }; 
            }
            return todo;
        })
);
    };
    const addTodoItem= (title)=> {
        const neTodo= {
            id:uuidv4(),
            title:title,
            completed: false
        }
        console.log(neTodo.id)
        setTodos([...todos, neTodo])
    }
    const delTodo =(id)=> {
        console.log('deleted',id);
        setTodos([
            ...todos.filter((todo)=> {
                return todo.id!==id;
            })
        ])
    }
    const setUpdate =(updatedTitle, id)=> {
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    todo.title=updatedTitle;
                }
                return todo;
            })
        );
    };
    return (

        <div>
            <InputTodo addTodoItem={addTodoItem}/>
            <TodosList todos={todos} setTodos={setTodos} handleChange ={handleChange} 
            delTodo={delTodo} setUpdate={setUpdate}/></div>
        
 )
}
export default TodosLogic;