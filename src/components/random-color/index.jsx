import { useState, useEffect, useCallback } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => Math.floor(Math.random() * length);

  // Memoized HEX color generator
  const handleRandomHEXColor = useCallback(() => {
    const hexChars = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexChars[randomColorUtility(hexChars.length)];
    }
    setColor(hexColor);
  }, []);

  // Memoized RGB color generator
  const handleRandomRGBColor = useCallback(() => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  }, []);

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleRandomRGBColor();
    } else {
      handleRandomHEXColor();
    }
  }, [typeOfColor, handleRandomHEXColor, handleRandomRGBColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={typeOfColor === "hex" ? handleRandomHEXColor : handleRandomRGBColor}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          color: "white",
          fontSize: "60px",
          textAlign: "center",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
