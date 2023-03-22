

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

import Thunder from '../assets/images/thunder.png';
import ThunderNight from '../assets/images/thunder-night.png';
import ThunderMiddle from '../assets/images/thunder-middle.png';

import HailstoneNight from '../assets/images/hailstone-night.png'
import Hailstone from '../assets/images/hailstone.png'
import HailstoneMiddle from '../assets/images/hailstone-middle.png'

import Sun from '../assets/images/sun.png'
import Night from '../assets/images/night.png'
import Cloud from '../assets/images/cloud.png'

import CloudNight from '../assets/images/cloud-night.png'
import CloudDay from '../assets/images/cloud-day.png'

import Fog from '../assets/images/fog.png'
import FogMiddle from '../assets/images/fog-middle.png'
import FogNight from '../assets/images/fog-night.png'

import IcyFog from '../assets/images/icy-fog.png'
import IcyFogMiddle from '../assets/images/icy-fog-middle.png'
import IcyFogNight from '../assets/images/icy-fog-night.png'

import MidSnowFastWinds from '../assets/images/mid-snow-fast-winds.png'

import FreezingHeavyRaining from '../assets/images/freezing-heavy-raining.png'
import FreezingHeavyRainingNight from '../assets/images/freezing-heavy-night.png'
import FreezingHeavyRainingMiddle from '../assets/images/freezing-heavy-middle.png'

import FreezingLightRain from '../assets/images/freezing-light-rain.png'
import FreezingLightRainNight from '../assets/images/freezing-light-rain-night.png'
import FreezingLightRainMiddle from '../assets/images/freezing-light-rain-middle.png'

import FreezingRaining from '../assets/images/freezing-raining.png'
import FreezingRainingNight from '../assets/images/freezing-raining-night.png'
import FreezingRainingMiddle from '../assets/images/freezing-raining-middle.png'

import Blizzard from '../assets/images/blizzard.png'
import BlizzardMiddle from '../assets/images/blizzard-middle.png'
import BlizzardNight from '../assets/images/blizzard-night.png'

import Snowing from '../assets/images/snowing.png'
import SnowingMiddle from '../assets/images/snowing-middle.png'
import SnowingNight from '../assets/images/snowing-night.png'

import SnowLightRain from '../assets/images/snow-light-rain.png'
import SnowLightRainNight from '../assets/images/snow-light-rain-night.png'
import SnowLightRainMiddle from '../assets/images/snow-light-rain-middle.png'

import SnowHeavyRaining from '../assets/images/snow-heavy-raining.png'
import SnowHeavyRainingNight from '../assets/images/snow-heavy-raining-night.png'
import SnowHeavyRainingMiddle from '../assets/images/snow-heavy-raining-middle.png'

import SnowWithThunder from '../assets/images/snow-with-thunder.png'

import Snow from '../assets/images/snow.png'

import SandDustCloud from '../assets/images/sand-dust-cloud.png'

import VolcanicAshCloud from '../assets/images/volcanic-ash-cloud.png'

import Tornado from '../assets/images/tornado.png'

import SandDustWhirls from '../assets/images/sand-dust-whirls.png'

import Squalls from '../assets/images/squalls.png'



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


        case "Possibilidade de trovoada":
        case "Trovoada":
            if (period === 'morning') {
                return Thunder
            } else if (period === 'afternoon') {
                return ThunderMiddle
            } else {
                return ThunderNight
            };
        
        case "Granizo":
        case "Aguaceiros fracos com granizo":
        case "Aguaceiros moderados ou fortes com granizo":
        case "Chuva de granizo":
            if (period === 'morning') {
                return Hailstone
            } else if (period === 'afternoon') {
                return HailstoneMiddle
            } else {
                return HailstoneNight
            };

        case "Parcialmente nublado":
        case "Nublado":
        case "Encoberto":
        case "Céu pouco nublado":
        case "Nuvens quebradas":
        case "Nuvens dispersas":
        case "Poucas nuvens":
            if (period === 'morning') {
                return CloudDay
            } else if (period === 'afternoon') {
                return Cloud
            } else {
                return CloudNight
            };

        case "Neblina":
        case "Nevoeiro":
        case "Névoa":
            if (period === 'morning') {
                return Fog
            } else if (period === 'afternoon') {
                return FogMiddle
            } else {
                return FogNight
            };

        case "Nevoeiro gelado": 
            if (period === 'morning') {
                return IcyFog
            } else if (period === 'afternoon') {
                return IcyFogMiddle
            } else {
                return IcyFogNight
            };
        
        case "Rajadas de vento com neve": return MidSnowFastWinds;


        case "Chuva gelada moderada ou forte":
        case "Chuva congelante":
            if (period === 'morning') {
                return FreezingHeavyRaining
            } else if (period === 'afternoon') {
                return FreezingHeavyRainingMiddle
            } else {
                return FreezingHeavyRainingNight
            };
        
        case "Chuvisco gelado":
        case "Chuva fraca e gelada":
            if (period === 'morning') {
                return FreezingLightRain
            } else if (period === 'afternoon') {
                return FreezingLightRainMiddle
            } else {
                return FreezingLightRainNight
            };
        
        case "Chuvisco forte gelado":
        case "Possibilidade de chuvisco gelado irregular":
            if (period === 'morning') {
                return FreezingRaining
            } else if (period === 'afternoon') {
                return FreezingRainingMiddle
            } else {
                return FreezingRainingNight
            };

        case "Nevasca":
        case "Chuva de neve":
            if (period === 'morning') {
                return Blizzard
            } else if (period === 'afternoon') {
                return BlizzardMiddle
            } else {
                return BlizzardNight
            };

        
        case "Queda de neve irregular e fraca":
        case "Queda de neve fraca":
        case "Queda de neve moderada e irregular":
        case "Queda de neve moderada":
        case "Neve":
        case "Possibilidade de neve irregular":
        case "Possibilidade de neve molhada irregular":
        case "Neve fraca":
            if (period === 'morning') {
                return Snowing
            } else if (period === 'afternoon') {
                return SnowingMiddle
            } else {
                return SnowingNight
            };

        case "Chuva fraca com neve":
        case "Aguaceiros fracos com neve":
        case "Chuva fraca e neve":
        case "Chuva de neve leve":
        case "Possibilidade de chuvisco gelado irregular":
            if (period === 'morning') {
                return SnowLightRain
            } else if (period === 'afternoon') {
                return SnowLightRainMiddle
            } else {
                return SnowLightRainNight
            };
        
        case "Chuva moderada ou forte com neve":
        case "Aguaceiros fracos com neve":
        case "Aguaceiros moderados ou fortes com neve":
        case "Chuva e neve":
        case "Chuva forte de neve":
            if (period === 'morning') {
                return SnowHeavyRaining
            } else if (period === 'afternoon') {
                return SnowHeavyRainingMiddle
            } else {
                return SnowHeavyRainingNight
            };

        case "Neve fraca irregular com trovoada":
        case "Neve moderada ou forte com trovoada":
           return SnowWithThunder;
        
        
        case "Neve intensa":
        case "Possibilidade de neve irregular":
        case "Possibilidade de neve molhada irregular":
        case "Neve pesada":
            return Snow;


        case "Areia":
        case "Pó":
            return SandDustCloud;

        
        case "Cinza vulcanica": 
            return VolcanicAshCloud;

        case "Tornado": 
            return Tornado;

        case "Confusão":
        case "Redemoinhos de areia/poeira":
            return SandDustWhirls;

        case "Rajadas": 
            return Squalls;

        default :  
            if (period === 'morning') {
                return Sun
            } else if (period === 'afternoon') {
                return Night
            } else {
                return Cloud
            };
        }
}