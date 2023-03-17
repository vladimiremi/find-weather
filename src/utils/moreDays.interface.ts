export interface IMoreDays {
  temp_c_max: number,
  temp_c_min: number,
  date: {
    weekday: string,
    month: string,
    day: string
  },
  condition: {
    text: string,
    icon: string
  }
}