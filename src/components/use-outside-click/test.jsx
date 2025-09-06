import { useRef, useState } from "react";
import useOutsideClick from "./index"; // adjust path if needed

export default function UseOnClickOutsideTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();

    // Hide content if click occurs outside the ref
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div>
            {showContent ? (
                <div ref={ref} style={{ padding: "20px", border: "1px solid black" }}>
                    <h1>This is random content.</h1>
                    <p>
                        Please click outside of this to close it. It won't close if you click
                        inside this content.
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    );
}
