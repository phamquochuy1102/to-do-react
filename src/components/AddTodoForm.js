import React, { useState, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'

const AddTodoForm = ({ addNewTodoFunc }) => {
  const [title, setTitle] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();

    if (title !== "") {
      addNewTodoFunc(title);
      setTitle("");
    }
  };

  const [input, setInput] = useState(false);

  const handleInput = () => {
    setInput(!input);
  };

  const { theme } = useContext(ThemeContext)
  const { isLight, light, dark } = theme
  const style = isLight ? light : dark

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="What need to be done next...?"
        value={title}
        onChange={changeTitle}
        className={input ? "displayInput" : "hiddenInput"}
      />
      <input
        style={style}
        type="submit"
        value="Add New"
        onClick={handleInput}
      />
    </form>
  );
};

export default AddTodoForm;
