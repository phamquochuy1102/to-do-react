import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLight, light, dark } = theme;
  const style = isLight ? light : dark;
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar" style={style}>
      <h1>To-do App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Blog</li>
      </ul>
      <div className="toggle" onClick={toggleTheme}>
        <button className="btn toggle-btn" style={style}>
          <i class="fas fa-moon"></i>
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Navbar;
