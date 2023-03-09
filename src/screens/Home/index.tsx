import { useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Text } from '../../components/Text';
import { Ionicons } from '@expo/vector-icons';
import RainingImage from '../../assets/images/raining.png';
import { AntDesign } from '@expo/vector-icons';

import { Empty } from './Empty';
import {
  Container,
  ContainerCity,
  ContainerCityName,
  ContainerImage,
  ContainerTitle,
  Image,
  NextDays,
} from './styles';
import { Temperature } from '../../components/Temperature';
import { WeatherDescription } from '../../components/WeatherDescription';
import { CardHourTemperature } from '../../components/CardHourTemperature';
import DropMiniaturePNG from '../../assets/images/drop-miniature.png';
import WindMiniaturePNG from '../../assets/images/wind-miniature.png';
import RainingCloudPNG from '../../assets/images/raining-cloud-miniature.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStoreData, removeItemStoreData } from '../../storage';
import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { IForecastData } from '../../utils/search.interce'
import { formatDate } from '../../utils/formatDate';
import { Button } from '../../components/Button';

const dataWeatherDescription = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    value: '24%',
    text: 'Umidade',
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    value: '30km/h',
    text: 'Veloc. Vento',
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    value: '76%',
    text: 'Chuva',
  },
];

const dataCardHourTemperature = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    temperatureValue: 23,
    hour: '09:00',
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    temperatureValue: 18,
    hour: '13:00',
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: '17:00',
  },

  {
    id: 4,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: '23:00',
  },
];

function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [response, setResponse] = useState<IForecastData>(null);
  const [isLoading, setIsLoading] = useState(false);


  const getInfos = async (value: string) => {
    const resp = await FindWeatherAPI.getForecast(value);
    const { forecast } = resp.data

    const [forecastday] = forecast.forecastday;

    const dataHome = {
      date: forecastday.date,
      date_epoch: forecastday.date_epoch,
      day: {
        maxtemp_c: forecastday.day.maxtemp_c,
        maxtemp_f: forecastday.day.maxtemp_f,
        mintemp_c: forecastday.day.mintemp_c,
        mintemp_f: forecastday.day.mintemp_f,
        avgtemp_c: forecastday.day.avgtemp_c,
        avgtemp_f: forecastday.day.avgtemp_f,
        maxwind_mph: forecastday.day.maxwind_mph,
        maxwind_kph: forecastday.day.maxwind_kph,
        totalprecip_mm: forecastday.day.totalprecip_mm,
        totalprecip_in: forecastday.day.totalprecip_in,
        totalsnow_cm: forecastday.day.totalsnow_cm,
        avgvis_km: forecastday.day.avgvis_km,
        avgvis_miles: forecastday.day.avgvis_miles,
        avghumidity: forecastday.day.avghumidity,
        daily_will_it_rain: forecastday.day.daily_will_it_rain,
        daily_chance_of_rain: forecastday.day.daily_chance_of_rain,
        daily_will_it_snow: forecastday.day.daily_will_it_snow,
        daily_chance_of_snow: forecastday.day.daily_chance_of_snow,
        condition: forecastday.day.condition,
        uv: forecastday.day.uv,
      },
      astro: {
        sunrise: forecastday.astro.sunrise,
        sunset: forecastday.astro.sunset,
        moonrise: forecastday.astro.moonrise,
        moonset: forecastday.astro.moonset,
        moon_phase: forecastday.astro.moon_phase,
        moon_illumination: forecastday.astro.moon_illumination,
      },
      hour: forecastday.hour,
    }
    setResponse(dataHome)
  }


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const value = await getStoreData({ storageKey: 'city' });
        setCity(value);

        if (value) {
          getInfos(value)
        }


        setIsLoading(false)

      } catch (error) {
        console.log(error)
        setIsLoading(false)

      }
    })();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Divider top={40} />
        <ActivityIndicator size="small" color={theme.COLORS.WHITE} />
      </Container>
    )
  }

  return (
    <>
      {!city && (
        <Empty />
      )}
      {
        !!response && (
          <Container>
            <Divider top={51} />
            <ContainerCity>
              <Ionicons
                name="location-sharp"
                size={22}
                color={theme.COLORS.WHITE}
              />
              <ContainerCityName>
                <Text
                  fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                  fontSize={theme.FONT_SIZE.SM}
                  color={theme.COLORS.WHITE}
                  style={{ lineHeight: 23 }}
                >
                  {`${city}, ${'falta colocar'}`}
                </Text>
                <Text
                  fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                  fontSize={theme.FONT_SIZE.XS}
                  color={theme.COLORS.GRAY_100}
                  style={{ lineHeight: 20 }}
                >
                  {formatDate(response.date)}
                </Text>
              </ContainerCityName>
            </ContainerCity>
            <Divider top={43} />
            <TouchableOpacity onPress={() => removeItemStoreData('city')}>
              <Text
                fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                fontSize={theme.FONT_SIZE.XS}
                color={theme.COLORS.GRAY_100}
                style={{ lineHeight: 20 }}
              >
                apagar
              </Text>
            </TouchableOpacity>
            <ContainerImage>
              <Image source={RainingImage} />
            </ContainerImage>

            <Temperature
              maxTemp={response.day.maxtemp_c}
              minTemp={response.day.mintemp_c}
              maxTempFontSize={theme.FONT_SIZE.GIANT}
              minTempFontSize={theme.FONT_SIZE.XL}
            />

            <Text
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
              fontSize={theme.FONT_SIZE.LG}
              color={theme.COLORS.GRAY_100}
            >
              {response?.day?.condition?.text}
            </Text>

            <Divider top={45} />

            <WeatherDescription data={dataWeatherDescription} />

            <Divider top={45} />

            <ContainerTitle>
              <Text
                fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                fontSize={theme.FONT_SIZE.XMD}
                color={theme.COLORS.WHITE}
              >
                Hoje
              </Text>

              <NextDays onPress={() => { }}>
                <Text
                  fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                  fontSize={theme.FONT_SIZE.XS}
                  color={theme.COLORS.GRAY_100}
                  textAlign="center"
                  onPress={() => navigation.navigate('home/moredays')}
                >
                  Próximos 5 dias
                </Text>
                <AntDesign
                  name="arrowright"
                  size={24}
                  color={theme.COLORS.GRAY_100}
                />
              </NextDays>
            </ContainerTitle>

            <Divider top={27} />
            <CardHourTemperature data={dataCardHourTemperature} teste={response.hour} />
          </Container>
        )
      }
    </>
  );
}

export default React.memo(Home);
