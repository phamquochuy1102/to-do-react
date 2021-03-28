import React from 'react'

const Navbar = () =>{

    return(
        <div className="navbar" style={style}>
            <h1>To-do App</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#blog">Blog</a></li>
            </ul>
        </div>
    )
}

export default Navbar