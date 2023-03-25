import { apiOpenWeatherMapGeo, apiOpenWeatherMap } from "./api"


export const FindOpenWeatherMapAPI= {
  getLatAndLong: ({city, countryCode='br'})=>{
    return apiOpenWeatherMapGeo.get(`direct?q=${city},${countryCode}&limit=1`)
  },
  getLastFiveDays: ({city, countryCode='br'})=>{
    return apiOpenWeatherMap.get(`forecast?q=${city},${countryCode}&units=metric&limit=5&lang=pt`)
  }
}