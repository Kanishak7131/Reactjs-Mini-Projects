
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../store";

export default function Item({ item }) {
    let dispatch = useDispatch();
    let cart = useSelector(state => state.cart.cart)

    function addtoCart() {
        dispatch(CartAction.addtoCart(item))
    }
    function removefromcart() {
        dispatch(CartAction.removefromCart(item.id))

    }
    return (<div className="flex flex-col gap-4 m-4 border-black-400 rounded shadow-4 overflwo-hidden w-80 p-4">
        <div className="overflow-hidden h-15 no-wrap">
            <h3>{item.title}</h3>
        </div>
        <div className="flex h-40 overflow-hidden w-full justify-center m-2 align-center">
            <img alt={item.title} src={item.image} className="block" />
        </div>
        <button onClick={cart.some((it) => it.id === item.id)
            ? removefromcart
            : addtoCart}>{cart.some((it) => it.id === item.id)
                ? "Remove from cart"
                : "Add to cart"}</button>
    </div>)
}