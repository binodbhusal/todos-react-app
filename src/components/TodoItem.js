import { useState } from "react";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, handleChange, delTodo, setUpdate })=> {
    const [edit, setEditing]=useState(false);
    let viewMode={};
    let editMode={};
    if(edit){
        viewMode.display='none';
    }else {
        editMode.display='none';
    }
    const handleEditing=()=> {
        setEditing(true);
    }
    const handleEditDone = (event)=> {
        if(event.key==='Enter'){
            setEditing(false);
        }
    }
    return (
<li className={styles.item}>
    <div style={viewMode} className={styles.content}>
    <input type='checkbox' onChange={() => handleChange(item.id)} />
    <button onClick={handleEditing}>Edit</button>
    <button onClick={()=> delTodo(item.id)}>Delete</button>
   <span className={styles.breaktext}>{item.title}</span> 
    </div>
    <input type='text'  value={item.title} style={editMode} 
            onChange={(e) => setUpdate(e.target.value, item.id)}onKeyDown={handleEditDone} 
            className={styles.textInput} />
</li>
    );
}
export default TodoItem;