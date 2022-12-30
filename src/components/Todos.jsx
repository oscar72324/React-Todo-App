import classes from './Todos.module.css'

const Todos = props => {
    const onDeleteHandler = () => {
        props.setTodos(props.todos.filter(ele => ele.id !== props.todo.id))
    }

    const onCompleteHandler = () => {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
            
        }))
    }

    return(
        <div className={classes.wrap}>
            <li className={`${classes.list} ${props.todo.completed ? classes.completed : ''}`}>{props.text}</li>
            <div className={classes.buttons}>
                <button className={classes['button-del']} onClick={onDeleteHandler}>Del</button>
                <button className={classes['button-comp']} onClick={onCompleteHandler}>Comp</button>
            </div>
        </div>
    )
}

export default Todos