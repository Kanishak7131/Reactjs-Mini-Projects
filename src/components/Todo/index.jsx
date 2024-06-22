import { useEffect, useState } from "react"

export default function Todo() {
    let [input, setInput] = useState("")
    let [list, setList] = useState([])
    let [filteredlist, setfilteredist] = useState([]);
    let [showfilteredlist, setShowfilteredlist] = useState("")

    useEffect(() => {
        if (showfilteredlist) {
            if (showfilteredlist == "Completed") {
                setfilteredist(list.filter((item) => item.status == true))
            }

            if (showfilteredlist == "Pending") {
                setfilteredist(list.filter((item) => item.status == false))
            }
        }
    }, [showfilteredlist, list])
    function handleAddtolist() {
        setList(prevList => [
            ...prevList,
            {
                title: input,
                status: false,
                id: input
            }
        ])
        setInput("")
    }

    function handleFilter(type) {
        if (type == 'All') {
            setShowfilteredlist("")
        }
        if (type == "Completed") {
            setShowfilteredlist("Completed")
        }
        if (type == "Pending") {
            setShowfilteredlist("Pending")
        }
    }

    function handleCheckbox(title) {
        let listClone = list.slice()
        let index = listClone.findIndex((item) => item.title == title)
        let linetoUpdate = listClone[index]
        linetoUpdate.status = !linetoUpdate.status
        listClone[index] = linetoUpdate;
        setList(listClone)
    }
    function handleDelete(title) {
        setList(list.filter((item) => item.title !== title))
    }
    console.log("list", list);
    return (<>
        <h1>Todo List</h1>
        <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
            <button onClick={() => handleFilter("All")}>All</button>
            <button onClick={() => handleFilter("Completed")}>Completed</button>
            <button onClick={() => handleFilter("Pending")}>Pending</button>
        </div>
        <div style={{ display: "flex", gap: "2rem", margin: "3rem" }}>
            <input placeholder="Add todo activity" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleAddtolist}>Add to list </button>
        </div>
        {!showfilteredlist && list && list.length > 0 && list.map((item) => {
            return (
                <div key={item.id} style={{ display: "flex", gap: "2rem", alignItems: "center", marginTop: "1rem" }} >
                    <input type="checkbox" onChange={() => handleCheckbox(item.title)} checked={item.status} />
                    <p style={{ fontWeight: "bold" }}>{item.title}</p>
                    <button onClick={() => handleDelete(item.title)}>Delete</button>
                </div>
            )
        })}

        {showfilteredlist && filteredlist && filteredlist.length > 0 && filteredlist.map((item) => {
            return (
                <div key={item.id} style={{ display: "flex", gap: "2rem" }} >
                    <input type="checkbox" onChange={() => handleCheckbox(item.title)} checked={item.status} />
                    <p style={{ fontWeight: "bold" }}>{item.title}</p>
                    <button onClick={() => handleDelete(item.title)}>Delete</button>
                </div>
            )
        })}

    </>)
}