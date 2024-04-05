import { useEffect, useState } from "react"

export default function DeleteandChecked() {
    let [data, setData] = useState()
    let [loading, setLoading] = useState(false)
    let [checked, setChecked] = useState([])

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true)
                let res = await fetch(`https://dummyjson.com/todos?limit=10&skip=0`)
                let res1 = await res.json()
                setData(res1.todos)

            }
            catch (err) {
                console.error(err)
            }
        }
        getProducts()
        setLoading(false)
    }, [])
    function handledelete(id) {
        setData(items => items.filter(item => item.id !== id))
    }

    function handleChange(e, id) {
        console.log(e, typeof id)
        let checkedcopy = [...checked]
        let id1 = parseInt(id)
        console.log(typeof id1)
        let ind = checkedcopy.indexOf(id1)
        if (ind !== -1) {
            checkedcopy[ind] = null;
        }
        else {
            checkedcopy.push(id)
        }
        setChecked(checkedcopy)
    }

    return (<>
        {loading && <h2>Loading......</h2>}
        {data && data.length >= 1 && data.map((item) => {
            return (
                <div key={item.id}>
                    <input type="checkbox" style={{ marginRight: "10px" }} onChange={(e) => handleChange(e, item.id)} />
                    <span style={{ textDecoration: checked.includes(parseInt(item.id)) ? "line-through" : "none" }}>{item.todo}</span>
                    <button style={{ marginLeft: "10px" }} onClick={() => handledelete(item.id)}>Delete</button>
                </div>
            )
        })}

    </>)
}