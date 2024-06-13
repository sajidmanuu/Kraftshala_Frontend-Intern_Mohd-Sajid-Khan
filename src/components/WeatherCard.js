// src/components/WeatherCard.js
import React from 'react';
import '../styles/WeatherCard.css';
// src/components/WeatherCard.js
// import React from 'react';
import weatherIconMapping from '../utils/weatherIconMapping';
// import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const iconClass = weatherIconMapping[weather.weather[0].icon] || 'bi-question-circle';
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      <p>{formattedDate}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Weather: {weather.weather[0].description}</p>
      <i className={`bi ${iconClass}`} style={{ fontSize: '48px' }}></i>
      <p>Created By<i> Mohd Sajid Khan</i></p>
    </div>
  );
};

export default WeatherCard;

