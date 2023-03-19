import { apiWeather } from './api';

export const FindWeatherAPI = {
  getForecast: (city: string) => {
    return apiWeather.get(`forecast.json?key=${process.env.KEY_WEATHERAPI}&q=${city}&days=1&aqi=no&alerts=no&lang=pt`);
  },
};
