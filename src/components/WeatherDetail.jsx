import { useState } from "react";

const WeatherDetail = ({weather}) => {

    const [celsius, setCelsius] = useState(true);

    const changeUnits = tempCelsius => ((tempCelsius * (9/5)) + 32).toFixed(1);

    const toggleUnits = () => setCelsius(!celsius);

    const DisplayTemperature = () => {
        if (celsius) {
          return <span className="text-3xl">{weather.main.temp} °C</span>;
        } else {
          return <span className="text-3xl">{changeUnits(weather.main.temp)} °F</span>;
        }
      };

    return (
        <article className="text-center grid gap-4"> 
            <h3>{weather.name}, {weather.sys.country}</h3>

            <div className="text-black grid gap-4">

                {/*Seccion1: Temperatura, descripcion e imagen */}
                <section className="bg-white/60 p-2 rounded-xl grid grid-cols-2 items-center">
                    <h3 className="col-span-2">{weather.weather[0].description.toUpperCase()}</h3>
                    <DisplayTemperature/>
                    <div>
                        <img className="block mx-auto" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                    </div>
                </section>

                {/* Seccion2: Detalles adicionales de clima*/}
                <section className="grid grid-cols-3 justify-items-center bg-white/60 p-2 rounded-xl">
                    <div className="flex gap-1">
                        <div>
                            <img src="/images/wind.svg" alt="wind icon"/>
                        </div>
                        <span>{weather.wind.speed} m/s</span>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="/images/rain.svg" alt="humidity icon"/>
                        </div>
                        <span>{weather.main.humidity}%</span>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="/images/pressure.svg" alt="pressure icon"/>
                        </div>
                        <span>{weather.main.pressure} hPa</span>
                    </div>
                </section>
            </div>
            <button className="bg-white/60 p-2 rounded-xl w-32 m-auto" onClick={toggleUnits}>Change to {celsius ? "°F" : "°C"}</button>
        </article>    
    )
}
export default WeatherDetail