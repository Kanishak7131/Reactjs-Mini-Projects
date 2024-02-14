import { useState } from "react";
import QRCode from "react-qr-code";


export default function QRCodeGenerator() {
    const [input, setinput] = useState("");
    const [value, setValue] = useState("")
    function handleChange() {
        setValue(input);
        setinput("")
    }
    return (
        <div>
            <div>
                <label>Enter the value: </label>
                <input value={input} onChange={(e) => setinput(e.target.value)} />
                <button onClick={handleChange}>Generte Code</button>
            </div>
            <div>
                <QRCode value={value} />
            </div>
        </div>
    )
}