import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css';

export default function QRCodeGenerator() {
    
    // State for input value
    const [input, setInput] = useState('');

    // State for generated QR code value
    const [qrCode, setQrCode] = useState('');

    // Function to generate QR code from input
    function handleGenerateQrCode() {
        setQrCode(input);
    }

    return (
        <div className="qr-code-generator">

            <h1>QR Code Generator</h1>

            {/* Input field and Generate button */}
            <div className="input-section">
                <input 
                    type="text"
                    name="qr-code"
                    placeholder="Enter your value here"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    disabled={!input.trim()} // Disable button if input is empty
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>

            {/* Display QR Code */}
            <div className="qr-code-display">
                {qrCode && (
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={400}
                        bgColor="#fff"
                    />
                )}
            </div>

        </div>
    );
}
