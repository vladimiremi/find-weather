import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header';
import {
  ConatinerDay,
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
interface RouteParams {
  city: string;
}
function MoreDays() {
  const theme = useTheme();

  const route = useRoute();

  const [fiveDays, setFiveDays] = useState<IMoreDays[]>([])

  const { city } = route.params as RouteParams;

  const getMoreDays = async (inputCity) => {
    try {

      const resp = await FindOpenWeatherMapAPI.getLastFiveDays({ city: inputCity });

      console.log(resp.data.list[0].weather);

      // setResponse(resp.data);

      const { city, list } = resp.data;


      const allDays = list.map(day => {
        return {
          temp_c_max: day.main.temp_max.toFixed(0),
          temp_c_min: day.main.temp_max.toFixed(0),
          date: convertUnixToTimestamp(day.dt),
          condition: {
            text: day.weather[0].description,
            icon: day.weather[0].icon
          }
        }
      })

      setFiveDays(allDays)

      console.log(allDays);



    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      getMoreDays(city)
    })()
  }, [])

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
      weekday: 'Seg',
      monthAndDay: 'Jan, 02',
      climate: 'Novoeiro',
    },
    {
      id: 4,
      icon: RainingCloudPNG,
      temperatureValue: 8,
      weekday: 'Ter',
      monthAndDay: 'Jan, 03',
      climate: 'Nuvens',
    },
    {
      id: 2,
      icon: WindMiniaturePNG,
      temperatureValue: 18,
      weekday: 'Qua',
      monthAndDay: 'Jan, 04',
      climate: 'Céu limpo',
    },

    {
      id: 3,
      icon: RainingCloudPNG,
      temperatureValue: 8,
      weekday: 'Qui',
      monthAndDay: 'Jan, 05',
      climate: 'Pouca chuva',
    },

    {
      id: 4,
      icon: RainingCloudPNG,
      temperatureValue: 8,
      weekday: 'Sex',
      monthAndDay: 'Jan, 06',
      climate: 'Nuvens',
    },
  ];

  return (
    <Container>
      <Divider top={37} />
      <ConatinerDay>
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

        <ContainerWeather>
          <Image source={Raining} />

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
              maxTemp={12}
              minTemp={17}
              minTempFontSize={theme.FONT_SIZE.XXL}
              maxTempFontSize={theme.FONT_SIZE.GIANT}
            />
            <Text
              color={theme.COLORS.GRAY_100}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
              fontSize={theme.FONT_SIZE.XMD}
              style={{ bottom: 18 }}
            >
              Novoeiro
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
    </Container>
  );
}

export default React.memo(MoreDays);
