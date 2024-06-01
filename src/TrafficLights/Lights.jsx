import { useEffect, useState } from "react"

const data = {
    green: {
        color: "green",
        next: "yellow",
        duration: 2000
    },
    yellow: {
        color: "yellow",
        next: "red",
        duration: 3000
    },
    red: {
        color: "red",
        next: "green",
        duration: 5000
    },
}

export default function TrafficLights() {
    let [lightcolor, setLightcolor] = useState(data.red.color)
    useEffect(() => {
        let light = data[lightcolor]
        let timer = setTimeout(() => setLightcolor(light.next), light.duration)

        return () => clearTimeout(timer)
    }, [lightcolor])
    console.log(lightcolor)
    return (
        <div style={{ display: "flex" }}>
            {Object.keys(data).map(item => {
                return (
                    <div key={item} style={{ backgroundColor: lightcolor == item ? data[lightcolor].color : null, height: "40px", width: "40px", border: "1px solid black", borderRadius: "50%" }}>
                    </div>

                )
            })}
        </div>
    )
}