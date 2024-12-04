import { createContext, useState } from "react";

export const ThemeContext = new createContext({})

export const ThemeProvider = (props) => {
    const [ isDark, setIsDark ] = useState(JSON.parse(localStorage.getItem("isDark")))
    
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {props.children}
        </ThemeContext.Provider>
    )
}