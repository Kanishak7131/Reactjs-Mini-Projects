import { useState } from "react"

export default function Expense({ setChart }) {
    const [val, setVal] = useState(0)
    const [check, setCheck] = useState(null)
    function handleSubmit(e) {
        e.preventDefault();
        setChart(prev => {
            if (check == "Income") {
                return {
                    ...prev,
                    income: prev.income + Number(val)
                }
            }
            else if (check == "Expense") {
                return {
                    ...prev,
                    expense: prev.expense + Number(val)
                }
            }

        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Amount</label>
            <input type="number" min={0} max={500} onChange={(e) => setVal(e.target.value)} value={val} />
            <label>Type of Expense</label>
            <div>
                <label>Income</label>
                <input type="checkbox" name="ExpenseVal" value="Income" id="ExpenseVal" checked={"Income" == check} onChange={() => setCheck("Income")} />
                <label>Expense</label>
                <input type="checkbox" name="ExpenseVal" value="Expense" id="ExpenseVal" checked={"Expense" == check} onChange={() => setCheck("Expense")} />
            </div>
            <button >Submit</button>
        </form>
    )
}