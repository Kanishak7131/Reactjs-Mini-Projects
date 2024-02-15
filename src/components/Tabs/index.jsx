import { useState } from "react"

let data = [{
    id: 1,
    title: "Tab 1",
    content: "tab 1 content"
},
{
    id: 2,
    title: "Tab 2",
    content: "tab 2 content"
},
{
    id: 3,
    title: "Tab 3",
    content: "tab 3 content"
},
]

export default function Tabs() {
    let [active, setActive] = useState(null);
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                {data && data.length > 1 && data.map((item) => <div key={item.id}>
                    <button onClick={() => setActive(item.id)} style={{ backgroundColor: item.id === active ? "black" : "white", color: item.id === active ? "white" : "black" }}>{item.title}</button>
                </div>)}
            </div>
            {data && data.length > 1 && data.map((item) => <h4 style={{ display: item.id === active ? "block" : "none" }}>{item.content}</h4>)}
        </>
    )
}