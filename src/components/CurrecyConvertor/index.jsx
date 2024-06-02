import { useState } from "react"

export default function CurrencyContertor() {
    let [initial, setInitial] = useState("USD")
    let [convertVal, setconvertVal] = useState(0)
    let [convertedVal, setconvertedVal] = useState(0)
    let [finaldVal, setfinalVal] = useState("USD")


    function handlleSelector(e) {
        setInitial(e.target.value)
    }
    function handlledSelector(e) {
        setfinalVal(e.target.value)
    }

    function handleConert() {
        let text = convertVal.toLocaleString("en-IN", { style: "currency", currency: `${finaldVal}` });
        setconvertedVal(text)
    }
    return (<>
        <h2>Currency Converter</h2>
        <div>
            <input type="number" placeholder="Enter number" value={convertVal} onChange={(e) => setconvertVal(e.target.value)} />
            <select onChange={handlleSelector}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
            </select>
        </div>
        <div>
            <input value={convertedVal} readOnly />
            <select onChange={handlledSelector}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
            </select>
        </div>
        <button onClick={handleConert}>Convert</button>
    </>)
}