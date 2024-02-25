import { useEffect, useState } from "react";

export default function ScrolltoTopandBottom() {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            let active = true;
            async function loadroducts() {
                try {
                    let res = await fetch(`https://dummyjson.com/products?limit=100&skip=0&select=title,price,thumbnail`)
                    if (!res.ok) {
                        throw new Error("Error fetch the data");
                    }
                    let data = await res.json();
                    if (active) {
                        setProducts(data.products)
                    }
                }
                catch (err) {
                    console.log(err)
                }
            }
            loadroducts();
            return () => { active = false }
        }, [])

    function handleclick(val) {
        if (val == "bottom") {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (<div>
        <button onClick={() => handleclick("bottom")}>Scroll to Bottom</button>
        {products && products.length > 1 && products.map((item) => <div key={item.id}>{item.title}</div>)}
        <button onClick={() => handleclick("top")}>Scroll to top</button>
    </div>)
}