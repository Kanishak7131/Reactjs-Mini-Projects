import { useEffect, useState } from "react"

export default function Pagination() {
    let [data, setData] = useState()
    let [loading, setLoading] = useState(false)
    let [skip, setskip] = useState(0)

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true)
                let res = await fetch(`https://dummyjson.com/todos?limit=10&skip=${skip}`)
                let res1 = await res.json()
                setData(res1.todos)

            }
            catch (err) {
                console.error(err)
            }
        }
        getProducts()
        setLoading(false)
    }, [skip])

    function handleBack() {
        if (skip == 0) {
            return
        }
        setskip(prev => prev - 10)
    }
    function handleNext() {
        if (skip == 100) {
            return
        }
        setskip(prev => prev + 10)
    }
    return (<>
        {loading && <h2>Loading......</h2>}
        {data && data.length >= 1 && data.map((item) => {
            return (
                <div key={item.id}>{item.todo}</div>
            )
        })}
        <button onClick={handleBack}>Back</button>
        <span>{skip} - {skip + 10}</span>
        <button onClick={handleNext}>Next</button>
    </>)
}