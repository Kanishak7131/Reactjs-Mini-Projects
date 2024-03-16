import { useState } from "react"
import Expense from "./expense";
import Chart from "./chart";
import TransactionChartSummary from "./chart";

export default function Main() {
    const [showExpense, setExpense] = useState(false);
    const [chart, setChart] = useState({ expense: 0, income: 0 })

    return (
        <div>
            <nav>
                <h2>Expense Tracker</h2>
                <Expense setChart={setChart} />
            </nav>
            <section>
                <h3>Balance is {chart.income - chart.expense}</h3>
                <p>Total Income {chart.income}</p>
                <p>Total Expense {chart.expense}</p>
            </section>
            <TransactionChartSummary expense={chart.expense} income={chart.income} />
        </div>
    )
}