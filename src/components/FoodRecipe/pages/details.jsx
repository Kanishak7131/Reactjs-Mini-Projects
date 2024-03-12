import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
    const [data, setData] = useState(null)
    let { id } = useParams();
    console.log(id)
    async function getreipedetails() {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            if (!res.ok) {
                throw new Error("Search like micheal eat his chicken pot pie ")
            }
            const res1 = await res.json();
            console.log(res1)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => { getreipedetails() }, [id])

}