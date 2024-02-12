import { useEffect, useState } from "react";

export default function ProductLoader() {
    const [products, setProducts] = useState([])
    let [skip, setskip] = useState(0)
    useEffect(
        () => {
            let active = true;
            async function loadroducts() {
                try {
                    let res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip == 0 ? 0 : skip * 10}&select=title,price,thumbnail`)
                    if (!res.ok) {
                        throw new Error("Error fetch the data");
                    }
                    let data = await res.json();
                    console.log("setProducts called")
                    if (active) {
                        setProducts(prev => [...prev, ...data.products])
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
            loadroducts();
            console.log("useEfffect called")
            return () => { active = false }
        }, [skip])
    console.log(products)
    return (<>
        <button onClick={() => { setskip(prev => prev + 1) }}>Load More Products</button>
        <div>
            {products && products.length > 1 && products.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
    </>
    )
}