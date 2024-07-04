import { useState } from "react"

export default function useToast() {

    let [toastmessages, settoastmessages] = useState([])



    return { toastmessages }
}