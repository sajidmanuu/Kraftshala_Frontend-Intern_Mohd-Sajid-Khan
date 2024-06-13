// src/api/weatherAPI.js
import axios from 'axios';
import { BASE_URL, API_KEY } from '../config';

export const fetchWeather = async (location, lat, lon) => {
  try {
    let response;
    if (location) {
      response = await axios.get(`${BASE_URL}weather?q=${location}&appid=${API_KEY}&units=metric`);
    } else {
      response = await axios.get(`${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    }
    return response.data;
  } catch (error) {
    throw new Error('Unable to fetch weather data');
  }
};
