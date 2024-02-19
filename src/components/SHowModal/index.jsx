import { useRef } from "react"

export default function ShowModal() {
    const dialogRef = useRef();
    return (
        <>
            <div>
                <h2>
                    Click me to open modal!!!!
                    <button onClick={() => dialogRef.current.showModal()}>Wink</button>
                </h2>
            </div>
            <dialog ref={dialogRef}>
                <h2>yolo</h2>
                <button onClick={() => dialogRef.current.close()}>Close</button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ut accusamus aliquam harum, nihil consectetur autem rerum repudiandae repellendus laborum iure rem placeat aspernatur error dolor porro animi fugit. Ducimus.</p>
            </dialog>
        </>
    )
}