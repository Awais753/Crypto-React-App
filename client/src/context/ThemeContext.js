import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [isDarkMode,setIsDarkMode] = useState(false);

    function toggleTheme(){
        let root = window.document.documentElement;
        root.classList.toggle('dark');
        document.body.classList.toggle('bg-dark');
        setIsDarkMode(!isDarkMode);
    }

    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;
export {ThemeContextProvider}