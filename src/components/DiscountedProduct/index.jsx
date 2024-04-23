import { useState, useEffect } from "react"
import DiscountFilter from "./DiscountFilter"

export default function DiscountProduct() {
    let [data, setData] = useState()
    let [filter, setfilter] = useState(0)

    function handlefilter(checked, val) {
        console.log("yo", checked)
        if (!checked) {
            setfilter(0)
            return
        }
        setfilter(val)

    }
    function clearFilter() {
        setfilter(0)
    }

    useEffect(() => {
        async function getProducts() {
            try {
                let res = await fetch(`https://dummyjson.com/products`)
                let res1 = await res.json()
                let res2 = res1.products.filter((prod) => Math.floor(prod.discountPercentage) >= filter)
                setData(res2)

            }
            catch (err) {
                console.error(err)
            }
        }
        getProducts()
    }, [filter])

    return (
        <>
            <DiscountFilter handlefilter={handlefilter} clearFilter={clearFilter} filter={filter} />
            {data && data.length >= 1 && data.map((item) => {
                return (
                    <div key={item.id}>
                        <span >{item.title}-{item.discountPercentage}</span>
                    </div>
                )
            })}
        </>
    )
}