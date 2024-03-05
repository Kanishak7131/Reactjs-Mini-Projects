import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from "./pages/main"
import Details from "./pages/details"
import Favourite from "./pages/favourite"
import Search from "./pages/search"

export default function FoodRecipe() {

    const router = createBrowserRouter([
        {
            path: "/", element: <Main />,
            children: [
                { path: "/", element: <Search /> },
                { path: "/details", element: <Details /> },
                { path: "/favourite", element: <Favourite /> },
            ]
        },

    ])

    return (
        <RouterProvider router={router}>
            <div className="bg-zinc-300">
                Hello
            </div>
        </RouterProvider>
    )
}