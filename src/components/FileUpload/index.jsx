import { useState } from "react"

export default function FileUpload() {
    let [file, setfile] = useState()

    function handleChange(e) {
        console.log(e.target.files)
        console.log(URL.createObjectURL(e.target.files[0]))
        setfile(URL.createObjectURL(e.target.files[0]))
    }

    return (<>
        <h2>File Upload</h2>
        <input type="file" onChange={handleChange} />
        <img src={file} alt="file upload view" />
    </>)
}