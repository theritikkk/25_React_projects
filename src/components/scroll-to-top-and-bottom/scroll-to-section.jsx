import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    { label: "First Card", style: { width: "100%", height: "600px", background: "red" } },
    { label: "Second Card", style: { width: "100%", height: "600px", background: "blue" } },
    { label: "Third Card", style: { width: "100%", height: "600px", background: "yellow" } },
    { label: "Fourth Card", style: { width: "100%", height: "600px", background: "green" } },
    { label: "Fifth Card", style: { width: "100%", height: "600px", background: "brown" } },
  ];

  // Scroll to the first section (or any section the ref points to)
  function handleScrollToSection() {
    if (ref.current) {
      const topOffset = ref.current.offsetTop; // position relative to document top
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <h1> Scroll to a particular section </h1>
      <button onClick={handleScrollToSection}> Click to Scroll </button>

      {data.map((dataItem, index) => (
        <div
          key={index}
          ref={index === 0 ? ref : null} // only the first card has the ref
          style={dataItem.style}
        >
          <h3> {dataItem.label} </h3>
        </div>
      ))}
    </div>
  );
}
