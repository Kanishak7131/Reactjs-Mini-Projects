import { useState } from "react"

export default function StepProgessBar() {
    let [steps, setsteps] = useState(Array(5).fill(null))
    let [box, setbox] = useState(0)
    function handlePrev() {
        if (box == 0) return;
        setbox(prev => prev - 1);
    }
    function handleNext() {
        if (box == steps.length - 1) return;
        setbox(prev => prev + 1)
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                {steps.map((item, i) => <div key={i} style={{ backgroundColor: i == box ? "green" : null, width: "9rem", height: "5rem", border: "2px solid black" }}>{`Step ${i}`}</div>)}
            </div>
            <button onClick={handlePrev} style={{ opacity: box == 0 ? "50%" : null }}>Previous</button>
            <button onClick={handleNext} style={{ opacity: box == steps.length - 1 ? "50%" : null }}>Next</button>
        </>)
}