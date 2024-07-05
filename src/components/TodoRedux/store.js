import { configureStore, createSlice } from '@reduxjs/toolkit'

let todoSlice = createSlice({
    name: "todoSlice",
    initialState: [{ id: Date.now(), title: "Hello World" }],
    reducers: {
        addTolist: (state, action) => {
            state.push(action.payload)
        },
        deleteFromList: (state, action) => {
            console.log(action, state)
            return state.filter((item) => item.id !== action.payload)
            console.log(action, state)

        }
    }
})

let store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})
export default store;
export const { addTolist, deleteFromList } = todoSlice.actions;
