import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
    let cart = useSelector(state => state.cart.cart)

    return (<div>{cart.map((item) => <div>{item.title}</div>)}</div>)
}