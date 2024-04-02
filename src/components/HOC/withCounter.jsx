import { useState } from "react"

export default function withCounter(Component) {
    return () => {
        const [inc, setInc] = useState(0);
        function incHandler() {
            setInc(prev => prev + 1)
        }
        return (
            <Component inc={inc} incHandler={incHandler} />
        )
    }
}
