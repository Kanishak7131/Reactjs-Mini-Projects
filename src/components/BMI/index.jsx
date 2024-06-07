import { useState } from "react"

export default function BMI() {
    let [height, setheight] = useState()
    let [weight, setweight] = useState()
    let [bmi, setbmi] = useState(null)
    function handlebmi() {
        let hi = height / 100
        console.log(hi)
        let calcbmi = weight / (hi ** 2)
        console.log(calcbmi)
        if (Math.floor(calcbmi) > 24) {
            setbmi("Overweight")
        } else if (Math.floor < 18) {
            setbmi("Underweight")
        } else {
            setbmi("Normal")
        }
        setheight();
        setweight()
    }
    return (
        <>
            <input value={weight} onChange={(e) => { setbmi(null); setweight(e.target.value) }} placeholder="Enter weight in kg..." />
            <input value={height} onChange={(e) => { setbmi(null); setheight(e.target.value) }} placeholder="Enter height in cm.." />
            <button onClick={handlebmi}>Calucalte</button>
            {bmi && <h4>BMI:{bmi}</h4>}
        </>
    )
}