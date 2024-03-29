import { useRef, useState } from "react"
import useFetch from "./useFetch"
import useWindow from "./usewindow"
import useWindowResize from "./useWindowResize"

export default function CustomHooks() {

    //     let { data, error, pending } = useFetch('https://dummyjson.com/products')
    //     return (<>
    //         {pending ? <h3>Pending ! Please wait</h3> : null}
    //         {error ? <h3>{error}</h3> : null}
    //         {data && data.products.length > 1 ? data.products.map((item) => <div key={item.id}>{item.title}</div>) : null}
    //     </>)

    //------------------------******** Click outside to close div ---------------------------------
    // let [toggle, setToggle] = useState(false)

    // let ref = useRef()
    // useWindow(ref, () => setToggle(false))
    // return (
    //     <div>
    //         {toggle ? (<div ref={ref}>
    //             <p>Please click outside to close the div element.</p>
    //         </div>) : (<button
    //             onClick={() => {
    //                 console.log("clicked")
    //                 setToggle(true)
    //             }}
    //         >Click me</button>)}
    //     </div>
    // )
    //------------------------******** Click outside to close div ---------------------------------
    let [data, setData] = useState({
        height: 0,
        width: 0
    })
    useWindowResize(data.height, data.width, setData)
    return (<>
        <div>
            Height : {data.height}
        </div>
        <div>
            Width : {data.width}
        </div>
    </>)
}