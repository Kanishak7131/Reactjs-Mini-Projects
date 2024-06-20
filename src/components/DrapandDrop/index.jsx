import { useEffect, useState } from "react"

export default function DragandDrop() {
    const [loading, setLoading] = useState(false)
    const [todo, setTodo] = useState([])
    async function fetchListOfTodos() {
        try {
            setLoading(true);
            const apiResponse = await fetch(
                "https://dummyjson.com/todos?limit=5&skip=0"
            );
            const result = await apiResponse.json();

            if (result && result.todos && result.todos.length > 0) {
                setLoading(false);
                const updatedTodos = result.todos.map((todoItem) => ({
                    ...todoItem,
                    status: "wip",
                }));
                setTodo(updatedTodos);
            }
        } catch (e) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListOfTodos();
    }, [])
    if (loading) {
        return (<>
            <h2>Loading Content......!</h2>
        </>)
    }
    function ondrag(e, id) {
        e.dataTransfer.setData('id', id)
    }
    function onDrop(e, status) {
        const id = e.dataTransfer.getData('id');

        let updatedTodo = todo.filter((item) => {
            if (item.id.toString() == id) {
                item.status = status
            }
            return item
        })
        setTodo(updatedTodo)
    }
    function renderlists() {
        const todolistreder = {
            wip: [],
            completed: []
        }
        todo.forEach((item) => {
            todolistreder[item.status].push(
                <div key={item.id} draggable onDragStart={(e) => ondrag(e, item.id)}>
                    {item.todo}
                </div>
            )
        })

        return todolistreder;
    }

    return (
        <>
            <h2>Drag and Drop todo list</h2>
            <div
                onDrop={(e) => onDrop(e, "wip")}
                onDragOver={(e) => e.preventDefault()}
            >
                <h3>In Progress</h3>
                {renderlists().wip}
            </div>
            <div
                onDrop={(e) => onDrop(e, "completed")}
                onDragOver={(e) => e.preventDefault()}
            >
                <h3>completed</h3>
                {renderlists().completed}
            </div>
        </>
    )
}