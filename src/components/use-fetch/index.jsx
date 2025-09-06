import { useState, useEffect, useCallback, useMemo } from "react";

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // Memoize the stringified options to use as stable dependency
  const memoizedOptions = useMemo(() => JSON.stringify(options), [options]);

  const fetchData = useCallback(async () => {
    setPending(true);
    try {
      const response = await fetch(url, JSON.parse(memoizedOptions));
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (e) {
      setError(`${e}. Some Error Occurred`);
    } finally {
      setPending(false);
    }
  }, [url, memoizedOptions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, pending, error };
}
