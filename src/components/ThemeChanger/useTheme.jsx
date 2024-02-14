import { useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("white");

    function changeTheme() {
        setTheme(prev => prev == "white" ? "black" : "white");
    }

    return { theme, changeTheme }
}