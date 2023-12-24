import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [cityname, setCityName] = useState('');
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5560543e2c9b2c79c49e4b78292b5b60`
      );

      setData(response.data.main);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='App'>
      <div className='cont'>
        <h1>Weather ateyyat</h1>
        <input
          type='text'
          placeholder='Enter city name'
          onChange={(e) => {
            setCityName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getWeather();
          }}
        >
          Get Weather
        </button>
        {loading && <h1>Loading...</h1>}
        {data ? (
          <div className='weather'>
            <h2> Data</h2>
            <h3>Temperature: {Math.floor(data.temp - 273.15)} °C</h3>
            <h3>Humidity: {data.humidity}%</h3>
            <h3>Pressure: {data.pressure} </h3>
          </div>
        ) : (
          <h2 style={{fontSize:"20px",
                      fontWeight:"normal"}}>Weather day</h2>
        )}
      </div>
    </div>
  );
}

export default App;

