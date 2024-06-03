import { useEffect, useState } from "react"

export default function FilterProducts() {
    let [loading, setLoading] = useState(false)
    let [products, setProducts] = useState([])
    let [filteredProducts, setFilteredproducts] = useState([])
    let [filter, setfilter] = useState("")

    useEffect(() => {
        async function getproducts() {
            setLoading(true)
            let res = await fetch('https://dummyjson.com/products')
            let res1 = await res.json();
            setProducts(res1.products)
            setFilteredproducts(res1.products);
            setLoading(false);
        }
        getproducts()
    }, [])

    useEffect(() => {
        let copyProducts = products.slice();
        if (filter) {
            copyProducts = copyProducts.filter((item) => filter.toLowerCase() == item.category.toLowerCase())
        }
        setFilteredproducts(copyProducts);
    }, [filter])

    let uniqueProductCategory = products && products.length > 0 ? [...new Set(products.map(item => item.category))] : ""

    if (loading) { return (<><h3>Loading Products......</h3></>) }
    return (
        <>
            <div style={{ display: "flex", gap: "3rem" }}>
                {uniqueProductCategory && uniqueProductCategory.length > 0 && uniqueProductCategory.map((item, i) => (
                    <button key={i} onClick={() => setfilter(filter ? "" : item)}>{item}</button>
                ))}
            </div>
            <h2>Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                {filteredProducts && filteredProducts.length > 0 && filteredProducts.map(item => <p key={item.id} style={{ margin: "2rem", padding: "1rem" }}>{item.title}</p>)}
            </div>
        </>
    )
}