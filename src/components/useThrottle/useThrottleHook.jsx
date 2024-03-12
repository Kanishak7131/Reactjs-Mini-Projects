import { useEffect, useRef, useState } from "react";

export default function useThrottleHook(resizefunction, delay) {
    let [throttleVal, setthrottleVal] = useState()
    let timer = useRef(Date.now())
    useEffect(() => {
        let settimer = setTimeout(() => {
            let timenow = Date.now()
            let timegone = timenow - timer.current;
            if (timegone >= delay) {
                setthrottleVal(resizefunction)
                timer.current = timenow;
            }
        }, delay)

        return () => clearTimeout(settimer)
    }, [resizefunction, delay])
    return throttleVal
}