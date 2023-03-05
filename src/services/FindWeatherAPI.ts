import { api } from './api';

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return api.get(`forecast.json?q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  },
  getSearch: (city: string) => {
    return api.get(`search.json?q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  },
};
