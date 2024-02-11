import { useEffect, useState } from "react";

export default function ImageSlider() {
    const [images, setImages] = useState(Array(5).fill(' '))
    const [index, setIndex] = useState(0)
    async function getImages() {
        try {
            let res = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
            if (!res.ok) {
                throw new Error("Invalid Request")
                return;
            }
            let data = await res.json();
            let data1 = data.map(item => {
                return {
                    id: item.id,
                    url: item.download_url,
                }
            })
            let data2 = data1.map(item => { return { ...item, active: item.id == 0 ? true : false } })
            setImages(data2);

        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getImages();
    }, [])
    function nextImageHandler() {
        setIndex(index == images.length - 1 ? 0 : index + 1)
    }
    function preImageHandler() {
        setIndex(index == 0 ? images.length - 1 : index - 1)
    }
    return (
        <>
            <button onClick={nextImageHandler} >Next</button>
            <button onClick={preImageHandler}>Before</button>
            {images && images[0] !== ' ' && images.map((item) => <div key={item.id}><img src={item.url} style={{ width: "500px", height: "500px", display: (item.id == index ? "block" : "none"), border: "2px solid black", borderRadius: "20px" }} /></div>)}

        </>
    )
}