import React from 'react'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import ThemeContextProvider from './context/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Todos />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
