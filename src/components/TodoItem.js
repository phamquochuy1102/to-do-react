import React from 'react'

const TodoItem = ({ todo, markCompletedFunc, deleteTodoFunc }) => {
    const style = {
        background: "rgb(240,240,240)",
        color: "black",
    }

    return (
        <div>
            <li style={style} onClick={deleteTodoFunc.bind(this, todo.id)}>
                <div>{todo.title}</div>
                <button className="delete-btn" onClick={deleteTodoFunc.bind(this, todo.id)}>Delete</button>
            </li>
        </div>
    )
}

export default TodoItem
