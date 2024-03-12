import { useEffect, useState } from "react";
import useThrottleHook from "./useThrottleHook";

export default function ThrootleHook() {
    let [windowsize, setWindowsize] = useState({ x: 0, y: 0 })

    function handleResize() {
        setWindowsize({ x: window.innerHeight, y: window.innerWidth })
    }

    let value = useThrottleHook(handleResize, 1000)

    useEffect(() => {
        window.addEventListener('resize', value)

        return () => window.removeEventListener('resize', value)
    }, [])

    return (
        <div>
            <p>Height - {windowsize.x}</p>
            <p>Width - {windowsize.y}</p>
        </div>
    )
}