import useLocalStorage from "./useLocalStorage";
import './theme.css';

export default function LightDarkMode() {
    // Using custom hook to persist theme in localStorage
    const [theme, setTheme] = useLocalStorage('theme', "dark");

    // Toggle between light and dark themes
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    console.log(theme); // Logs the current theme

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p> Hello World ! ! ! </p>

                <button onClick={handleToggleTheme}> Change Theme </button>
            </div>
        </div>
    );
}
