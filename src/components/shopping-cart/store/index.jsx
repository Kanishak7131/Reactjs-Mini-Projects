import { createSlice, configureStore } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "cart",
    initialState: { cart: [], data: [], totalPrice: 0, numOfItems: 0 },
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload
        },
        addtoCart: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        removefromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer
    }
})



export default store;
export const CartAction = CartSlice.actions