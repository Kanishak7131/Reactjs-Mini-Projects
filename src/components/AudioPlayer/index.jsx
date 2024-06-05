import { useEffect, useRef, useState } from "react";

const tracks = [
    {
        title: "Track 1",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        image: "https://via.placeholder.com/150",
    },
    {
        title: "Track 2",
        source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        image: "https://via.placeholder.com/150",
    },
    // Add more tracks as needed
];

export default function AudioPlayer() {
    let audio = useRef();
    let [playing, setPlaying] = useState(false)
    let [curreenttrack, setcurrenttrack] = useState(0)
    let [trackpreogress, settrackprogress] = useState(0)

    useEffect(() => {
        if (playing) {

            let interval = setInterval(() => {
                settrackprogress((audio.current.currentTime / audio.current.duration) * 100)
            }, 1000)

            return () => clearInterval(interval);
        }
    }, [playing])

    function handleaudio() {

        playing ? audio.current.pause() : audio.current.play()
        setPlaying(prev => !prev)
    }
    function handletrack() {
    }
    return (<>
        <h2>Audio Player</h2>
        <img src={tracks[curreenttrack].image} alt={tracks[curreenttrack].title} />
        <div style={{ width: `${trackpreogress}px`, height: "2rem", backgroundColor: playing ? "green" : "red" }}></div>
        <audio ref={audio} src={tracks[curreenttrack].source} />
        <div>
            <button onClick={() => handletrack("back")}>Back</button>
            <button onClick={handleaudio}>{playing ? "Pause" : "Play"}</button>
            <button onClick={() => handletrack("next")}>Next</button>
        </div>
    </>)
}