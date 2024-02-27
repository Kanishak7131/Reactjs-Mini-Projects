import { useState } from "react"

export default function WeatherApp() {

    const [input, setInput] = useState("")
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null)

    async function handldleClick() {
        try {
            setLoading(true);
            //add api key
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=`)
            const data = await res.json();
            if (!data) {
                throw new Error("Fetching failed")
            }
            setLoading(false);
            setData(data)
            console.log(data)
            setInput("")
        }
        catch (err) {
            setLoading(false)
            setError(err)
        }
    }
    let content = <h3>Please enter the location for the weather data</h3>;
    if (error) {
        content = <h3>Faced some error while loading the data. Please try again later</h3>
    }
    if (loading) {
        content = <h3>Loading Data. Please wait .....</h3>
    }
    if (data) {
        content =
            <div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h3>Country :{data.sys.country}</h3>
                    <h4>City :{data.name}</h4>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <h5>Weather : {data.weather[0].main}</h5>
                    <h6>Weather Description : {data.weather[0].description}</h6>

                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <p>Temperature :{data.main.temp}</p>
                    <p>Feels like :{data.main.feels_like}</p>
                    <p>Pressure :{data.main.pressure}</p>
                    <p>Humidity :{data.main.humidity}</p>
                </div>
            </div>
    }
    return (<div>
        <h1>Weather App</h1>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter Location" />
        <button onClick={handldleClick}>Search</button>
        {
            content

        }
    </div>)
}
