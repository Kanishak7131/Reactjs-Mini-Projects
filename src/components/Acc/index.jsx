import { useState } from "react";
import data from "./data";
export default function Acc() {
    let [selected, setSelected] = useState(null)
    let [multi, setMulti] = useState([])
    console.log(multi)
    function handleselected(id) {
        let mulitcopy = [...multi]
        let ind = mulitcopy.indexOf(id)
        if (ind == -1) {
            mulitcopy.push(id)
        }
        mulitcopy[ind] = null
        setMulti(mulitcopy)
    }
    return (<>
        {data.map((item) => {
            return (<div key={item.id}>
                <p>{item.question}{multi.includes(item.id)}</p>
                <button onClick={() => handleselected(item.id)}>+</button>
                {multi.indexOf(item.id) > -1 ? <p>{item.answer}</p> : null}
            </div>)
        })}
    </>)
}