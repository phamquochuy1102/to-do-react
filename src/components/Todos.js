import React, { useState, useEffect } from 'react'
import AddTodoForm from './AddTodoForm'
import TodoItem from './TodoItem'
import axios from 'axios'

const Todos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
       const getTodos = async () =>{
           try {
               const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
               setTodos(res.data)
           } catch (error) {
               console.log(error.message)
           }
       }
       getTodos()
    }, [])

    const addNewTodo = async title =>{
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/todos?', {
                title,
                completed:false,
            })
            const newTodo = [...todos, res.data]
            setTodos(newTodo)
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteTodo = async id => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const newTodos = todos.filter(todo=> todo.id !== id)
            setTodos(newTodos)
        } catch (error) {
            console.log(error.message)
        }
    }

    const markCompleted = id => {
        const newTodos=todos.map(todo => {
            if(todo.id === id ) todo.completed = !todo.completed;
            return todo
        })
        setTodos(newTodos);
    }

    return (
        <div className="todos">
            <AddTodoForm addNewTodoFunc={addNewTodo}/>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                    todo={todo} 
                    markCompletedFunc={markCompleted}
                    deleteTodoFunc={deleteTodo}/>
                ))}
            </ul>
        </div>
    )
}

export default Todos
