import { useState } from "react"

export default function Tip() {
    let [amount, setamount] = useState(null)
    let [tip, settip] = useState(10)
    let [people, setpeople] = useState(0)
    let [total, settotal] = useState(null)
    function handletip() {
        if (amount <= 0 || !amount || tip <= 0 || !tip) {
            return
        }
        let billamount = parseFloat(amount);
        let totaltip = (billamount * tip) / 100;
        let toalamount = billamount + totaltip;
        let toalamountperperson = toalamount / people;
        let toaltipamountpererson = totaltip / people;

        settotal({
            totalamount: toalamount.toFixed(2),
            totalamountperson: toalamountperperson.toFixed(2),
            totaltipamountperperson: toaltipamountpererson.toFixed(2)
        })
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Amount</label>
            <input type="number" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Enter bill amount" />
            <label>Tip in %</label>
            <input type="number" value={tip} onChange={(e) => settip(e.target.value)} placeholder="Enter tip" />
            <label>Number of person</label>
            <input type="number" value={people} onChange={(e) => setpeople(e.target.value)} placeholder="number to divide by.." />
            <button onClick={handletip}>Calculate</button>
            {total ? (<div>
                <p>Total bill:{total.totalamount}</p>
                <p>Total tip person :{total.totaltipamountperperson}</p>
                <p>Total amount per person :{total.totalamountperson}</p>
            </div>) : null}
        </div>
    )
}