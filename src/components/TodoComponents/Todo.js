import React from 'react'

const Todo = props => {
console.log(props)
    return (
        <ul>
            <li>{props.todo.task}</li>
        </ul>
    )

}
export default Todo