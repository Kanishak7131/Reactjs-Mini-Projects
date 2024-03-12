import { Link } from "react-router-dom"

export default function MainNavigation() {
    return (
        <nav className="flex justify-between">
            <div className="w-60">
                <Link to='/'>Food Recipe</Link>
            </div>
            <div className="flex w-40 justify-between">
                <Link to='/'>Home</Link>
                <Link to='/fav'>Fav</Link>
            </div>
        </nav>
    )
}