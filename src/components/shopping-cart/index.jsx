import { Provider } from "react-redux"
import Main from "./pages/main"
import store from "./store"
import Cart from "./pages/cart"

export default function ShoppingCart() {
    return (<Provider store={store}>
        <Main></Main>
        <h3>Cart Start</h3>
        <Cart></Cart>
    </Provider>)
}