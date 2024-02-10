import { useState } from "react"
let hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
export default function RandomColorGenerator() {
    const [color, setColor] = useState('')
    function handleColor(name) {
        if (name == "random") {
            const arr = Array(6).fill(0);
            const arr1 = arr.map((item) => hexArray[Math.floor(Math.random() * hexArray.length)])
            console.log(arr1, `'#'+ ${arr1.join('')}`);
            setColor(`#${arr1.join('')}`)
        }
        else if (name == "rgb") {
            let str = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            console.log(str);
            setColor(str)
        }

    }
    console.log(color)
    return (
        <>
            <button onClick={() => handleColor("random")}>Hex Color</button>
            <button onClick={() => handleColor("rgb")}>RGB Color</button>
            <button onClick={() => handleColor("random")}>Random Color</button>
            <div style={{ backgroundColor: color, width: "100%", height: "100%", margin: "0 auto", color: "white", fontWeight: "bold" }} >{color}</div>
        </>
    )
}