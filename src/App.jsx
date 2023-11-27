import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import WeatherDetail from './components/WeatherDetail';

function App() {
  
  const [weather, setWeather] = useState(null)
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=46d914decc02f487e9a767e277b79b62

  const successLocation = (pos) => {

    

    const {coords:{latitude, longitude}} = pos;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=46d914decc02f487e9a767e277b79b62&units=metric`)
         .then(({data}) => setWeather(data))
         .catch(err => console.log(err));
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(successLocation);

  }, [])
  
  // bg-[url(bgimagepath) for image background
  return (
    <main className="h-screen flex justify-center items-center bg-[#2e6175] text-white">

      {weather ? <WeatherDetail weather={weather}/> : "Cargando..."}    
    </main>
  )
}

export default App
