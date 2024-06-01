import { useState } from "react"

export default function Tooltip() {
    let [tooltip, setTooltip] = useState(false);
    return (<>
        <div style={{ position: "relative", width: "50vw", height: "50vh" }} >
            {tooltip && <ShowToolTip />}
            <h3 onMouseOver={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>Tool Tip</h3>
            <p>Hover over the above!</p>
        </div>
    </>)
}

function ShowToolTip() {
    return (<>
        <div style={{ position: "absolute", top: "-25%", left: "25%", padding: "1rem 2rem", border: "1px solid black", width: "20rem", backgroundColor: "black", color: "white" }}>I am Tooltip, wassup !</div>
    </>)
}