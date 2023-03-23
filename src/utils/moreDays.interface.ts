export interface IMoreDays {
  humidity: number,
  rain_probability: number,
  wind: number,
  temp_c_max: number,
  temp_c_min: number,
  date: {
    weekday: string,
    month: string,
    day: string,
    hour: string,
  },
  condition: {
    text: string,
    icon: string
  }
}