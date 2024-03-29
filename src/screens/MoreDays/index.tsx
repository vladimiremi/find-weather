import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header';
import {
  ConatinerDay,
  ConatinerNav,
  Container,
  ContainerDays,
  ContainerTemperature,
  ContainerWeather,
  Image,
} from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { Temperature } from '../../components/Temperature';
import Raining from '../../assets/images/raining.png';
import { Text } from '../../components/Text';
import DropMiniaturePNG from '../../assets/images/drop-miniature.png';
import WindMiniaturePNG from '../../assets/images/wind-miniature.png';
import RainingCloudPNG from '../../assets/images/raining-cloud-miniature.png';
import { WeatherDescription } from '../../components/WeatherDescription';
import CardDayHourTemperature from '../../components/CardDayHourTemperature';
import { useRoute } from '@react-navigation/native';
import { FindOpenWeatherMapAPI } from '../../services/FindOpenWeatherMapAPI';
import { convertUnixToTimestamp } from '../../utils/formatDate';
import { IMoreDays } from '../../utils/moreDays.interface';
import { ActivityIndicator } from 'react-native';
import { WeatherIcons } from '../../utils/weatherIcons';
import { getStoreData } from '../../storage';
interface RouteParams {
  city: string;
}
function MoreDays() {
  const theme = useTheme();

  const route = useRoute();

  const [fiveDays, setFiveDays] = useState<IMoreDays[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { city } = route.params as RouteParams;

  const getMoreDays = async (inputCity) => {
    try {
      setIsLoading(true)
      const storedCountryCode = await getStoreData({storageKey: 'country'});

      const resp = await FindOpenWeatherMapAPI.getLastFiveDays({ city: inputCity, countryCode:  storedCountryCode});

      const { list } = resp.data;


      const allDays = list.slice(5).map(day => {
        return {
          humidity: day.main.humidity,
          rain_probability: day.pop,
          wind: day.wind.speed,
          temp_c_max: day.main.temp_max.toFixed(0),
          temp_c_min: day.main.temp_min.toFixed(0),
          date: convertUnixToTimestamp(day.dt),
          condition: {
            text: day.weather[0].description,
            icon: day.weather[0].icon,
          }
        }
      })

      setFiveDays(allDays)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)

    }
  }

  useEffect(() => {
    (async () => {
      await getMoreDays(city)
    })()
  }, [])

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: fiveDays[1]?.humidity + '%',
      text: 'Umidade',
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: Math.floor(fiveDays[1]?.wind * 3.6 )+ ' km/h',
      text: 'Veloc. Vento',
    },

    {
      id: 3,
      icon: RainingCloudPNG,
      value: Math.floor(fiveDays[1]?.rain_probability * 100) + '%',
      text: 'Chuva',
    },
  ];

  return (
    <Container>

      <ConatinerNav>
        <Divider top={37} />
        <Divider top={15} />
        <Header
          icon={
            <MaterialIcons
              name="calendar-today"
              size={22}
              color={theme.COLORS.WHITE}
            />
          }
          title="Próximos 5 dias"
        />

      </ConatinerNav>

      {isLoading ? (
        <>
          <Divider top={40} />
          <ActivityIndicator size="small" color={theme.COLORS.WHITE} />
        </>
      ) : (
        <>
          <ConatinerDay>


            <ContainerWeather>
              <Image source={WeatherIcons({ weather: fiveDays[0]?.condition.text, hours: Number(fiveDays[0]?.date.hour) })} />

              <ContainerTemperature>
                <Text
                  color={theme.COLORS.GRAY_100}
                  fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                  fontSize={theme.FONT_SIZE.XMD}
                  style={{ top: 18 }}
                >
                  Amanhã
                </Text>
                <Temperature
                  maxTemp={fiveDays[0]?.temp_c_max}
                  minTemp={fiveDays[0]?.temp_c_min}
                  minTempFontSize={theme.FONT_SIZE.XXL}
                  maxTempFontSize={theme.FONT_SIZE.GIANT}
                />
                <Text
                  color={theme.COLORS.GRAY_100}
                  fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                  fontSize={theme.FONT_SIZE.XMD}
                  style={{ bottom: 18 }}
                >
                  {fiveDays[0]?.condition.text}
                </Text>
              </ContainerTemperature>
            </ContainerWeather>
            <Divider top={20} />
            <WeatherDescription data={dataWeatherDescription} />
            <Divider top={36} />
          </ConatinerDay>

          <Divider top={42} />

          <ContainerDays>
            <CardDayHourTemperature data={fiveDays} />
          </ContainerDays>
        </>
      )}

    </Container>
  );
}

export default React.memo(MoreDays);
