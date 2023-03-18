import axios from 'axios';

const apiWeather = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  timeout: 1000,
  params: {
    key: process.env.KEY_WEATHERAPI,
  },
});

const apiOpenWeatherMap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: process.env.KEY_OPENWEATHERMAP
  }
})
const apiOpenWeatherMapGeo = axios.create({
  baseURL: 'http://api.openweathermap.org/geo/1.0',
  params: {
    appid: process.env.KEY_OPENWEATHERMAP
  }
})

export { apiWeather, apiOpenWeatherMap, apiOpenWeatherMapGeo };
