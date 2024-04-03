import { useEffect, useState } from "react";

export default function InfinteScroll() {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            let active = true;
            async function loadroducts() {
                try {
                    let res = await fetch(`https://dummyjson.com/products?limit=50&skip=0&select=title,price,thumbnail`)
                    if (!res.ok) {
                        throw new Error("Error fetch the data");
                    }
                    let data = await res.json();
                    if (active) {
                        setProducts(prev => [...prev, ...data.products])
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
            loadroducts()
            window.addEventListener('scroll', loadroducts)

            return () => {
                active = false;
                window.removeEventListener('scroll', loadroducts)
            }
        }, [])
    return (<>
        <div onScroll={() => console.log("yo")} style={{ width: "300px", height: "300px" }}>
            <div style={{ width: "100%", height: "100%" }}>
                {products && products.length > 1 && products.map((item) => <div key={item.id}>{item.title}</div>)}
            </div>
        </div>
    </>
    )
}