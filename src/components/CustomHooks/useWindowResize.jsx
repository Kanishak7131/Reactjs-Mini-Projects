import { useEffect } from "react";

export default function useWindowResize(height, width, func) {

    function reportWindowSize() {
        func(prev => {
            return { ...prev, height: window.innerHeight, width: innerWidth }
        })
    }
    useEffect(() => {
        window.addEventListener("resize", reportWindowSize);

        return () => {
            window.removeEventListener("resize", reportWindowSize);
        }
    }

        , [height, width])
}