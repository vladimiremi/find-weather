

import LightRainNigth from '../assets/images/light-rain-night.png'
import LightRain from '../assets/images/light-rain.png'
import LightRainMidlle from '../assets/images/light-rain-middle.png'


export const WeatherIcons = ({ weather, hours }) => {

    const getPeriod = () => {
        if (hours <= 5 && hours >= 17) {
            return 'nigth'
        } else if (hours > 5 && hours <= 12) {
            return 'morning'
        }
    }
    const period = getPeriod();

    switch (weather) {
        case "Chuvisco irregular":
        case "Chuvisco":
        case "Chuva fraca irregular":
        case "Chuva fraca":
        case "Chuva leve":
        case "Chuva e garoa":
            if (period === 'morning') {
                return LightRain
            } else if (period === 'nigth') {
                return LightRainNigth
            } else {
                return LightRainMidlle
            };


    }
}