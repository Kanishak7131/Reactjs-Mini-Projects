import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./pages/main"
import Details from "./pages/details"
import Favourite from "./pages/favourite"
import Search from "./pages/search"
import FoodContextProvider from "./store/FoodContextProvider"

export default function FoodRecipe() {

    const router = createBrowserRouter([
        {
            path: "/", element: <Main />,
            children: [
                { path: "/", element: <Search /> },
                { path: "/details/:id", element: <Details /> },
                { path: "/fav", element: <Favourite /> },
            ]
        },

    ])

    return (
        <FoodContextProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </FoodContextProvider>
    )
}