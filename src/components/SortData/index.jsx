import { useEffect, useState } from "react"

export default function SortData() {
    let [loading, setLoding] = useState(false)
    let [data, setData] = useState()
    let [sort, setSort] = useState("")
    useEffect(() => {
        async function getData() {
            setLoding(true)
            let res = await fetch(`https://dummyjson.com/users`)
            let res1 = await res.json();
            setLoding(false);
            setData(res1.users)
        }
        getData()
    }, [])

    useEffect(() => {
        if (!data && !sort) {
            return
        }
        let datacopy = data.slice();
        if (sort == "asc") {
            datacopy.sort((a, b) => a.firstName.localeCompare(b.firstName))
        }
        if (sort == "dsc") {
            datacopy.sort((a, b) => b.firstName.localeCompare(a.firstName))
        }
        console.log(datacopy)
        setData(datacopy)
    }, [sort])

    if (loading) {
        return (<>
            <h3>Loading Content....</h3>
        </>)
    }

    return (<>
        <select style={{ margin: "2rem" }} onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value={""}>Please select an option</option>
            <option value={"asc"}>Sort a-z</option>
            <option value={"dsc"}>Sort z-a</option>
        </select>
        <ul style={{ height: "300px", display: "flex", flexWrap: "wrap", gap: "2rem", flexDirection: "column" }}>
            {
                data && data.length > 0 && data.map((item) => <li key={item.id}>{item.firstName}</li>)
            }
        </ul>
    </>)
}