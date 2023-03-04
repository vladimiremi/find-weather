import React from 'react';
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

function MoreDays() {
  const theme = useTheme();

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
        <CardDayHourTemperature />
      </ContainerDays>
    </Container>
  );
}

export default React.memo(MoreDays);
