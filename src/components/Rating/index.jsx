import { useState } from "react";

export default function Rating() {
    let [rating, setraing] = useState()
    let [star, setstar] = useState([1, 2, 3, 4, 5])

    function handleenter(id) {
        setraing(id)
        console.log("enter", id)
    }
    function handleleave(id) {
        if (id == 1) {
            setraing(null)
        }
        else { setraing(id) }
        console.log("leave", id)
    }
    return (<div style={{ display: "flex", gap: "2rem" }}>
        {
            star.map(item => {
                return (<div key={item} style={{
                    border: "2px solid black", height: "24px", width: "24px",
                    backgroundColor: item <= rating ? "yellow" : "white"
                }}
                    onMouseEnter={() => handleenter(item)}
                    onMouseLeave={() => handleleave(item)}

                >

                </div>)
            })
        }
    </div>)
}