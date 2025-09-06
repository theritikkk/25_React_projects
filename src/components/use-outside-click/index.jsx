import { useEffect } from "react";

/**
 * Custom hook to detect clicks outside a referenced element
 * @param {object} ref - React ref object pointing to the element
 * @param {function} handler - function to call when click occurs outside
 */
export default function useOutsideClick(ref, handler) {
    useEffect(() => {
        // Event listener to handle clicks
        function listener(event) {
            // If ref doesn't exist or click is inside the ref, do nothing
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            // Call the handler if click is outside
            handler(event);
        }

        // Attach both mouse and touch events
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        // Cleanup on unmount
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]); // Re-run if ref or handler changes
}
