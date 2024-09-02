import React, { useEffect, useState } from 'react'
import Search from './Search';
import './weather.css'

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (param) => {
    setLoading(true);
    try {
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?${param}&units=metric&appid=b2e30f7ef0386c960ef0424843922ae9`);
      const data = await resp.json();
      if (data) {
        setWeatherData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSearch('')
    }
  };

   const fetchCurrentLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(`lat=${latitude}&lon=${longitude}`);
          },
          (error) => {
            console.error("Error getting location:", error);
            fetchWeatherData('q=Kharkiv');
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        fetchWeatherData('q=Kharkiv');
      }
    };

  const handleSearch = async () => {
    fetchWeatherData(`q=${search}`);
  };

  const getCurrentDate = () => new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    fetchCurrentLocationWeather();
  }, []);


  return (
    <div className='weather-app'>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{weatherData?.main?.temp.toFixed()} ℃</div>
          <p className="description">
            {weatherData?.weather[0]?.description}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed} m/s</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather