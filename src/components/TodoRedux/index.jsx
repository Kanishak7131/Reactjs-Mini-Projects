import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTolist, deleteFromList } from "./store"

export default function TodoRedux() {
    let [input, setinput] = useState("")
    let dispatch = useDispatch()
    let todolist = useSelector(state => state.todo)
    console.log(todolist);
    function handleclick() {
        if (input.length >= 1) {
            dispatch(addTolist({ id: Date.now(), title: input }))
        }
        setinput("")
    }
    function handleDelete(id) {
        dispatch(deleteFromList(id))
    }
    return (<>
        <h2>Todo List</h2>
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <button onClick={handleclick}>Add</button>
        <ul>
            {
                todolist && todolist.length > 0 && todolist.map((item) => <li key={item.id}>{item.title}
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>)
            }
        </ul>
    </>)
}