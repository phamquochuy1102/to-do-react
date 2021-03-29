import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const TodoItem = ({ todo, markCompletedFunc, deleteTodoFunc }) => {
  const { theme } = useContext(ThemeContext);
  const { isLight, light, dark } = theme;
  const style = isLight ? light : dark;
  const completedStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    alignItem: "center",
  };

  return (
    <div>
      <li style={style}>
        <div style={completedStyle}>
          <input
            type="checkbox"
            onChange={markCompletedFunc.bind(this, todo.id)}
            checked={todo.completed}
          />
          {todo.title}
        </div>
        <button className="btn" onClick={deleteTodoFunc.bind(this, todo.id)}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
