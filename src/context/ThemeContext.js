import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState({
        isLight: true,
        light: {
            backgroundColor: 'rgb(240,240,240)',
            color: 'navy',
        },
        dark: {
            backgroundColor: '#18191a',
            color: 'white',
        }
    })

    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLight: !theme.isLight
        })
    }


    const themeContextData = {
        theme, toggleTheme
    }

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider