import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../store";
import Item from "../components/Item";


export default function Main() {
    let dispatch = useDispatch();
    let data = useSelector(state => state.cart.data)
    async function fetchPoducts() {
        let res = await fetch("https://fakestoreapi.com/products")
        let res1 = await res.json();
        //let res2 = res1.map((it) => {...it, addtoCart: false})
        dispatch(CartAction.updateState(res1));
    }

    useEffect(() => { fetchPoducts() }, [])

    return (<div>
        {data && data.length > 0 && (<div className="flex flex-wrap">
            {data.map((item) => <Item key={item.id} item={item} />)}
        </div>)}
    </div>)
}