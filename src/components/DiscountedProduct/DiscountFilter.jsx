export default function DiscountFilter({ clearFilter, handlefilter, filter }) {
    return (
        <>
            <label>12 %</label>
            <input value="40" type="checkbox" onChange={(e) => handlefilter(e.target.checked, 12)} checked={filter == 12} />

            <label>10 %</label>
            <input value="40" type="checkbox" onChange={(e) => handlefilter(e.target.checked, 10)} checked={filter == 10} />

            <label >15 %</label>
            <input value="40" type="checkbox" onChange={(e) => handlefilter(e.target.checked, 15)} checked={filter == 15} />
            <button onClick={clearFilter}>Clear</button>
        </>
    )
}