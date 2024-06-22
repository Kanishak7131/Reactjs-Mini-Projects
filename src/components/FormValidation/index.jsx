import { useState } from "react"

export default function FormValidtion() {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setpassword] = useState("")
    return (
        <>
            <h2>Form Validation</h2>
            <label>Username : </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            {username && username.length < 3 && <p>PLease enter more than 3 characters</p>}
            <label>Email : </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <label>Password : </label>
            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" />
            <button>Submit</button>
        </>
    )
}