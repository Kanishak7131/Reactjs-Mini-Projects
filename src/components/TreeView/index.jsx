import { useState } from "react"
import data from "./data.js"

function View({ item }) {
    const [hide, sethide] = useState(false)
    console.log(item.children)
    if (item.children) {
        return (
            <div>
                <span>{item.label}</span>
                <button onClick={() => sethide(prev => !prev)}>+</button>
                {hide && item.children.map((it) => <div>< View item={it} /></div>)}
            </div>
        )
    }
    else {
        return (
            <div>
                {item.label}
            </div>
        )

    }
}


export default function TreeView() {

    return (
        <div>
            {data.map((item, idx) => <div key={idx}><View item={item} /></div>)}
        </div>
    )
}