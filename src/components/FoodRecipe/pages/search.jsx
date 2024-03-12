import { useState } from "react"
import FoodDetails from "../components/fooddetails"
import RecipeItem from "../components/foodrec"

export default function Search() {
    const [input, setInput] = useState()
    const [data, setData] = useState(null)

    async function handleClick() {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${input}`)
            if (!res.ok) {
                throw new Error("Search like micheal eat his chicken pot pie ")
            }
            const res1 = await res.json();
            setData(res1.recipes)
            console.log(res1.recipes)
            setInput("")
        }
        catch (err) {

        }
    }
    return (
        <>
            <input placeholder="Enter the dish name" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Search</button>
            <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
                {data && data.length > 0 ? (
                    data.map((item) => {
                        return (
                            <FoodDetails item={item} />
                        )
                    })
                ) : (
                    <div>
                        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                            Nothing to show. Please search something
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}