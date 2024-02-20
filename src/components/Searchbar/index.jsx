import { useEffect, useState } from "react"

export default function SearchBar() {

    let [data, setData] = useState()
    let [input, setInput] = useState("")

    async function handleSearch() {
        if (input.trim() == "") return;
        let res = await fetch(`https://dummyjson.com/users/search?q=${input}`)
        let data = await res.json();
        setData(data.users);
    }
    useEffect(() => { handleSearch() }, [input])
    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            {
                data && data.length > 1 && (data.map((item) => <div key={item.id} >{item.firstName}</div>))
            }
        </>
    )
}