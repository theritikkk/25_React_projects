import { useEffect, useState } from "react";

/**
 * Custom hook to fetch data from an API.
 * @param {string} url - API endpoint
 * @param {object} options - fetch options like headers, method, etc.
 * @returns {object} - { data, pending, error }
 */
export default function useFetch(url, options = {}) {
    // Manage three states
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    // Fetch function
    async function fetchData() {
        setPending(true);
        try {
            const response = await fetch(url, { ...options });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
            setError(null);
        } catch (e) {
            setError(`${e}. Some error occurred.`);
        } finally {
            setPending(false);
        }
    }

    // Fetch on mount or when URL changes
    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, pending, error };
}
