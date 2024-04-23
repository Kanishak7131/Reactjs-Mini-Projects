export default function Grid({ box, handleClick }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box" }}>
            <div style={{ display: "flex" }} >
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(0) }}>{box[0]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(1) }}>{box[1]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(2) }}>{box[2]}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(3) }}>{box[3]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(4) }}>{box[4]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(5) }}>{box[5]}</div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(6) }}>{box[6]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(7) }}>{box[7]}</div>
                <div style={{ border: "1px black solid", padding: "25px" }} onClick={() => { handleClick(8) }}>{box[8]}</div>
            </div>
        </div>
    )
}