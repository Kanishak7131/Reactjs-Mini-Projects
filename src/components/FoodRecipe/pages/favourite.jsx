
import { useContext } from "react";
import FoodContext from "../store";

export default function Favourite() {
    let foodctx = useContext(FoodContext)
    console.log(foodctx.fav)
    return (<div>{
        foodctx.fav && foodctx.fav.length >= 1 && (
            foodctx.fav.map((item) => (<div className="w-80 overflow-hidden p-5 flex flex-col border-2 rounded-2xl gap-5 shadow-xl">
                <p className="text-xl truncate text-black">{item.title}</p>
                <div className="h-40 overflow-hidden flex justify-center item-center " >
                    <img src={item.image_url} alt={item.title} className="w-full block" />
                </div>
            </div >))
        )
    }</div>)
}
