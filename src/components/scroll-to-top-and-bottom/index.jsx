import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndToBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=5000",
    {}
  );

  const bottomRef = useRef(null);

  if (error) {
    return <h1> Error occurred! Please try again. </h1>;
  }

  if (pending) {
    return <h1> Loading! Please Wait. </h1>;
  }

  // Scroll smoothly to top
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  // Scroll smoothly to bottom using the ref
  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" }); // fixed typo 'behaviour'
  }

  return (
    <div>
      <h1> Scroll To Top And Bottom Feature </h1>

      <h3> This Is The Top Section </h3>

      <button onClick={handleScrollToBottom}> Scroll to Bottom </button>

      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>

      <button onClick={handleScrollToTop}> Scroll To Top </button>

      {/* Empty div at bottom for scrolling */}
      <div ref={bottomRef}></div>

      <h3> This is the bottom of the page. </h3>
    </div>
  );
}
