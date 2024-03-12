import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import FoodContextProvider from "../store/FoodContextProvider";


export default function Main() {
    return (
        <div className="w-100">
            <MainNavigation />
            <Outlet />
        </div>
    )
}