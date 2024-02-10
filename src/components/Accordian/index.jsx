import { useState } from "react"
import data from "./data.js"
export default function Accordian() {
    const [selected, setSelected] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [multiple, setmultiple] = useState([])

    function handleclick(id) {
        setSelected(selected === id ? null : id)
    }
    function handleOptions() {
        setEnabled(prev => !prev)
    }
    function handlemultiClick(id) {
        let copymultiarr = [...multiple];
        let index = copymultiarr.indexOf(id)
        if (index == -1) {
            copymultiarr.push(id)
        }
        copymultiarr[index] = null;
        setmultiple(copymultiarr)
    }

    return (<>
        <button onClick={handleOptions}>Click to enable open multiple questions</button>
        {enabled ? <div><h4>Multiple options mode</h4></div> : <div><h4>Single Option Mode</h4></div>}
        {data && data.length > 1 ? data.map(item => <div key={item.id}>
            <div onClick={enabled ? () => handlemultiClick(item.id) : () => handleclick(item.id)} style={{ display: "flex" }}>
                <h3>{item.question}</h3>
                <span style={{ margin: "auto 0" }}>+</span>
            </div>
            {enabled ? (multiple.indexOf(item.id) > 1 ? <div>{item.answer}</div> : null) : (selected === item.id ? <div>{item.answer}</div> : null)}
        </div>) : <div>No data found</div>}
    </>
    )

}