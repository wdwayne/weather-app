import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import WeatherCard from "./WeatherCard";
import { API_KEY, BASE_URL } from "./api/api";

function WeatherBox() {

    const [url, setUrl] = useState('');
    const [data, setData] =useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null)

    useEffect(() => {
        if(!url) return;

        setData(null);
        setError(null);

        setIsLoading(true)

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);

                if (data.cod !== 200) {
                    setError(data.message);
                    return
                }
                
                setData(data);
            })

            .catch((error) => {
                setIsLoading(false);
                setError(error);
            })
    }, [url])

    const getContent = () => {
        if(error) return <h2>Error fetching: {error}</h2>
        if(!data && isLoading) return <h2>Loading data...</h2>
        if(!data) return null;
        return <WeatherCard 
            Name={ data.name } 
            description={ data.weather[0].description } 
            icon={ data.weather[0].icon } 
            temp={ data.main.temp }
            daTi={ data.dt }
            />
    }


    return (
        <div className="weatherBox">
            <SearchField onPress ={ (city) => setUrl(`${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) } onClick={(city) => setUrl(`${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)} />
            { getContent() }
        </div>
    )
}

export default WeatherBox
