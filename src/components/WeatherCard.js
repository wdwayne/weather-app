
function WeatherCard({ Name, icon, description, temp, daTi }) {

    const d = new Date(daTi * 1000).toLocaleDateString("en-US")
    const t = new Date(daTi * 1000).toLocaleTimeString("en-US")

    return (
        <div className='weatherItems'>
            <h1>{Name}</h1>
            <h4>{d}</h4>
            <h4>{t}</h4>
            <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather Icon"/>
            <h1>{ description }</h1>
            <h2> {temp} &deg;C</h2>
        </div>
    )
} 

export default WeatherCard;
