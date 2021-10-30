import { useContext } from "react";
import { ThemeContext } from "../storage";


type ThemeSet = {
    backgroundColor: string,
    borderColor: string,
    color: string,
    borderColorLight: string,
    textColorDisabled: string,
    boxShadow: string,
    boxShadowHover: string,
    boxShadowInset: string,
    boxShadowInsetLow: string,
    boxShadowFab: string,
}

const light: ThemeSet = {
    backgroundColor: 'var(--light-bg)',
    borderColor: 'var(--text-color)',
    color: 'var(--g-text-color-light)',
    borderColorLight: 'var(--light-bg-dark-shadow)',
    textColorDisabled: 'var(--g-text-color-disabled-light)',
    boxShadow: '5px 5px 12px var(--light-bg-dark-shadow), -4px -4px 10px var(--light-bg-light-shadow)',
    boxShadowHover: '2px 2px 5px var(--light-bg-dark-shadow), -2px -2px 5px var(--light-bg-light-shadow)',
    boxShadowInset: 'inset -2px -2px 5px var(--light-bg-light-shadow), inset 2px 2px 5px var(--light-bg-dark-shadow)',
    boxShadowInsetLow: 'inset -1px -1px 3px var(--light-bg-light-shadow), inset 1px 1px 3px var(--light-bg-dark-shadow)',
    boxShadowFab: '10px 10px 20px var(--light-bg-dark-shadow), -7px -7px 16px var(--light-bg-light-shadow)',
}

const dark: ThemeSet = {
    backgroundColor: 'var(--dark-bg)',
    borderColor: 'var(--text-color)',
    color: 'var(--g-text-color-dark)',
    borderColorLight: 'var(--dark-bg-light-shadow)',
    textColorDisabled: 'var(--g-text-color-disabled-dark)',
    boxShadow: '5px 5px 12px var(--dark-bg-dark-shadow), -4px -4px 10px var(--dark-bg-light-shadow)',
    boxShadowHover: '2px 2px 5px var(--dark-bg-dark-shadow), -2px -2px 5px var(--dark-bg-light-shadow)',
    boxShadowInset: 'inset -2px -2px 5px var(--dark-bg-light-shadow), inset 2px 2px 5px var(--dark-bg-dark-shadow);',
    boxShadowInsetLow: 'inset -1px -1px 3px var(--dark-bg-light-shadow), inset 1px 1px 3px var(--dark-bg-dark-shadow);',
    boxShadowFab: '10px 10px 20px var(--dark-bg-dark-shadow), -7px -7px 16px var(--dark-bg-light-shadow);',
}


export const useTheme = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const themeColors: ThemeSet = isDark ? dark : light
    return { isDark, toggleTheme, themeColors }
}