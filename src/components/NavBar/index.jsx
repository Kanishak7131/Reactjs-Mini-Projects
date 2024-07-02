import { useEffect, useState } from "react"

export default function NavBar() {
    let [dropdown, setdropdown] = useState(false)
    let [displayHam, setdisplayHam] = useState(false)
    let [width, setwidth] = useState(window.innerWidth)
    let [displaymobilemenu, setdisplaymobilemenu] = useState(false)
    let [displaymobileservices, setdisplaymobileservices] = useState(false)

    useEffect(() => {
        if (width <= 900) {
            setdisplayHam(true)
        } else {
            setdisplayHam(false)
        }
    }, [width])

    function changeWidth() {
        console.log(window.innerWidth)
        setwidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", changeWidth)

        return () => window.removeEventListener("resize", changeWidth)
    })

    function handlemobiledisplay() {
        setdisplaymobilemenu(!displaymobilemenu)
    }
    if (displayHam) {
        return (<>
            <p onClick={handlemobiledisplay}>Hamburermenu</p>
            {
                displaymobilemenu && (<div>
                    <p>Home</p>
                    <p>About</p>
                    <div onClick={() => setdisplaymobileservices(!displaymobileservices)}>
                        <p>Services</p>
                        {displaymobileservices && <Services />}
                    </div>
                    <p>Contact US</p>
                </div>)
            }
        </>)
    }
    return (<nav style={{ display: "flex", gap: "2rem" }}>
        <p>Home</p>
        <p>About</p>
        <div onMouseEnter={() => setdropdown(true)} onMouseLeave={() => setdropdown(false)}>
            <p>Services</p>
            {dropdown && <Services />}
        </div>
        <p>Contact US</p>
    </nav>)
}

function Services() {
    return (
        <ul>
            <li>Services 1</li>
            <li>Services 2</li>
            <li>Services 3</li>
        </ul>
    )
}