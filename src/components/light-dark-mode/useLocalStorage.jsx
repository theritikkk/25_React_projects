import { useEffect, useState } from "react";

/**
 * Custom hook for storing a value in localStorage
 * @param {string} key - localStorage key
 * @param {*} defaultValue - default value if nothing is stored
 * @returns [value, setValue]
 */
export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
