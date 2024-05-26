import { useState, useEffect } from 'react';

const useTheme = () => {
    const [themeState, setThemeState] = useState("dark");

    useEffect(() => {
        const applyTheme = (theme) => {
            const fontColor = theme === "dark" ? "rgb(240, 240, 240)" : "rgb(24, 22, 38)";
            const backgroundColor = theme === "dark" ? "rgb(24, 22, 38)" : "rgb(240, 240, 240)";
            document.documentElement.style.setProperty("--font-color", fontColor);
            document.documentElement.style.setProperty("--background", backgroundColor);
        };

        applyTheme(themeState);
    }, [themeState]);

    const toggleTheme = () => {
        setThemeState(currentTheme => currentTheme === "dark" ? "light" : "dark");
    };

    return [themeState, toggleTheme];
};

export default useTheme;