import { Children, useContext, useState } from "react"
import FoodContext from "./index"

export default function FoodContextProvider({ children }) {
    let [fav, setfav] = useState([])
    function addFav(value) {
        console.log(value)
        setfav([...fav, value])
    }
    console.log("fav from store", fav)

    return (<FoodContext.Provider value={{ fav, addFav }}>
        {children}
    </FoodContext.Provider>)
}