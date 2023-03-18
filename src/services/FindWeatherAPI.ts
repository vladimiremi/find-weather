import { apiWeather } from './api';

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return apiWeather.get(`forecast.json?q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  },
  getCurrentWeather: (city: string)=> {
    return apiWeather.get(`current.json?q=${city}&days=1&aqi=no&alerts=no&lang=pt`)
  },
  getSearch: (city: string) => {
    return apiWeather.get(`search.json?q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  },
};
