import { useState } from "react"

export default function GitProfile() {
    let [input, setInput] = useState('');
    let [data, setdata] = useState();
    async function handleSearch() {
        let res = await fetch(`https://api.github.com/users/${input}`)
        let res1 = await res.json();
        setdata(res1);
        setInput("");
    }
    console.log(data)

    return (
        <>
            <label>Enter the profile name for searching</label>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <section>
                {data && (<div>
                    <img src={data.avatar_url} />
                    <span>{data.login}</span>
                    <h5>Repositories {data.public_repos}</h5>
                </div>)}
            </section>
        </>
    )
}