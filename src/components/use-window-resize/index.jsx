import { useLayoutEffect, useState } from "react";

/**
 * Custom hook to track window size (width and height)
 * @returns {object} - { width, height }
 */
export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    // Update state with current window dimensions
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    // useLayoutEffect ensures the size is updated before paint
    useLayoutEffect(() => {
        // Initialize size on mount
        handleResize();

        // Listen to resize events
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}
