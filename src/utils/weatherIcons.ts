

import LightRainNigth from '../assets/images/light-rain-night.png'
import LightRain from '../assets/images/light-rain.png'
import LightRainMidlle from '../assets/images/light-rain-middle.png'

import Raining from '../assets/images/raining.png'
import RainingNight from '../assets/images/raining-night.png'
import RainingMiddle from '../assets/images/raining-middle.png'

import HeavyRaining from '../assets/images/heavy-raining.png'
import HeavyRainingNight from '../assets/images/heavy-raining-night.png'
import HeavyRainingMiddle from '../assets/images/heavy-raining-middle.png'

import Waterdrop from '../assets/images/waterdrop.png'
import WaterdropNight from '../assets/images/waterdrop-night.png'
import WaterdropMiddle from '../assets/images/waterdrop-middle.png'

import RainingAndThunder from '../assets/images/raining-and-thunder.png'

import HeavyRainingDuringNight from '../assets/images/heavy-raining-and-thunder-night.png';
import HeavyRainingDuring from '../assets/images/heavy-raining-and-thunder.png';
import HeavyRainingDuringMiddle from '../assets/images/heavy-raining-and-thunder-middle.png';


export const WeatherIcons = ({ weather, hours }) => {

    const getPeriod = () => {
        if (hours >= 5 && hours <= 12) {
            return 'morning'
        } else if (hours > 12 && hours <= 17) {
            return 'afternoon'
        } else {
            return 'night'
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
            } else if (period === 'afternoon') {
                return LightRainMidlle
            } else {
                return LightRainNigth
            };
        case "Possibilidade de chuva irregular":
        case "Períodos de chuva moderada":
        case "Chuva moderada":
        case "Chuva de banho":
        case "Chuva":
        case "Tempestade irregular":
            if (period === 'morning') {
                return Raining
            } else if (period === 'afternoon') {
                return RainingMiddle
            } else {
                return RainingNight
            };

        case "Períodos de chuva forte":
        case "Chuva forte":
        case "Chuva torrencial":
        case "Chuva de forte intensidade":
        case "Chuva muito forte":
        case "Chuva extrema":
        case "Garoa de forte intensidade":
        case "Chuva forte e garoa":
            if (period === 'morning') {
                return HeavyRaining
            } else if (period === 'afternoon') {
                return HeavyRainingMiddle
            } else {
                return HeavyRainingNight
            };
        case "Aguaceiros fracos":
        case "Aguaceiros moderados ou fortes":
            if (period === 'morning') {
                return Waterdrop
            } else if (period === 'afternoon') {
                return WaterdropMiddle
            } else {
                return WaterdropNight
            };

        case "Chuva fraca irregular com trovoada":
        case "Chuva torrencial":
        case "Leve tempestade":
        case "Trovoada com chuva leve":
        case "Trovoada com garoa leve":
        case "Trovoada com garoa":
        case "Trovoada com garoa forte":
            return RainingAndThunder

        case "Chuva moderada ou forte com trovoada":
        case "Trovoada com chuva":
        case "Trovoada com chuva forte":
        case "Forte tempestade":
            if (period === 'morning') {
                return HeavyRainingDuring
            } else if (period === 'afternoon') {
                return HeavyRainingDuringMiddle
            } else {
                return HeavyRainingDuringNight
            };





    }
}