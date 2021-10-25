import React from 'react'
import { useLocalStorage } from '../hooks';

export const ThemeContext = React.createContext({
    isDark: false,
    toggleTheme: () => { /* */ }
});

type Provider = {
    children: React.ReactNodeArray | React.ReactNode,
};

type ThemeType = 'light' | 'dark'

const isDarkTheme = (theme: string): boolean => theme === 'dark'

export const ThemeProvider = ({ children }: Provider): JSX.Element => {
    const [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'light')
    const isDark = isDarkTheme(theme)

    const toggleTheme = () => {
        if (isDark) {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
    </ ThemeContext.Provider>

}