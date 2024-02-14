import useTheme from "./useTheme"

export default function ThemeChanger() {
    const { theme, changeTheme } = useTheme();
    return (
        <div style={{ backgroundColor: theme, width: "20rem", height: "20rem" }}>
            <h2 style={{ color: theme == "white" ? "black" : "white" }}>
                Hello World
            </h2>
            <button style={{ color: theme, backgroundColor: theme == "white" ? "black" : "white" }} onClick={changeTheme}>Change Theme</button>
        </div>
    )
}