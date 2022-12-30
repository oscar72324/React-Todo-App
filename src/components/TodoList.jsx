import Todos from "./Todos"
import classes from './TodoList.module.css'

const TodoList = props => {
    return(
        <div className={classes.wrap}>
            <ul className={classes.ul}>
                {props.todos.map(todo => (
                    <Todos 
                    todos={props.todos} 
                    setTodos={props.setTodos} 
                    key={todo.id} 
                    text={todo.text}
                    todo={todo}
                    
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList