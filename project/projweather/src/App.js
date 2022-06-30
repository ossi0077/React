import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import WeatherButton from './components/WeatherButton';
import WeatherBox from './components/WeatherBox';
import { ClipLoader } from 'react-spinners';

const API_key = '3a6298a1dc0fbe04ba39fa7f3523bb90';
const cities = ['paris','new york','tokyo','seoul'];
// 35.82616160273464
// 128.54678590800657
const App = () => {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState('');

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
      
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      getWeatherByCurrentLocation(latitude, longitude);
      console.log('현재위치?', latitude, longitude);
    });
  };

  const getWeatherByCity = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
      
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    }catch(err){
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <Container className="vh-100">
      {loading ? (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        </div>
      ) : !apiError ? (
        <div class="main-container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            selectedCity={city}
          />
        </div>
      ) : (
        apiError
      )}
    </Container>
  );
};

export default App;
