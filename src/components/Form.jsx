import classes from './Form.module.css'

const Form = props => {
    const changeHandler = (e) => {
        props.setInput(e.target.value)
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        props.setTodos([
            ...props.todos, {
                text: props.input, 
                completed: false,
                id: Math.random()
            }
        ])

        props.setInput('')
    }

    return(
        <form className={classes.form}>
            <input className={classes.input} onChange={changeHandler} type="text" value={props.input}/>
            <button className={classes.button} onClick={onSubmitHandler}>Add</button>
        </form>
    )
}

export default Form