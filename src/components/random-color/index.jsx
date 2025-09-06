import { useEffect, useState } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex'); // Track type of color
    const [color, setColor] = useState('#000000'); // Current color

    // Utility to generate random number within given length
    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    // Generate random HEX color
    function handleRandomHEXColor() {
        const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hexChars[randomColorUtility(hexChars.length)];
        }
        setColor(hexColor);
    }

    // Generate random RGB color
    function handleRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }

    // Update color when type changes
    useEffect(() => {
        if (typeOfColor === 'rgb') {
            handleRandomRGBColor();
        } else {
            handleRandomHEXColor();
        }
    }, [typeOfColor]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
        }}>

            {/* Buttons to change color type and generate color */}
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={typeOfColor === 'hex' ? handleRandomHEXColor : handleRandomRGBColor}>
                    Generate Random Color
                </button>
            </div>

            {/* Display current color */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '20px',
                color: 'white',
                fontSize: '60px',
                textAlign: 'center',
            }}>
                <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>

        </div>
    );
}
