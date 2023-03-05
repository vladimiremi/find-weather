import { View } from 'react-native';
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

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('@city');

        console.log(value);
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      {true ? (
        <Empty />
      ) : (
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
                A Coruña, Espanha
              </Text>
              <Text
                fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                fontSize={theme.FONT_SIZE.XS}
                color={theme.COLORS.GRAY_100}
                style={{ lineHeight: 20 }}
              >
                Domingo, 01 Jan de 2023
              </Text>
            </ContainerCityName>
          </ContainerCity>
          <Divider top={43} />

          <ContainerImage>
            <Image source={RainingImage} />
          </ContainerImage>

          <Temperature
            maxTemp={23}
            minTemp={18}
            maxTempFontSize={theme.FONT_SIZE.GIANT}
            minTempFontSize={theme.FONT_SIZE.XL}
          />

          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.LG}
            color={theme.COLORS.GRAY_100}
          >
            Chuva Moderada
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

            <NextDays onPress={() => {}}>
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
          <CardHourTemperature data={dataCardHourTemperature} />
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
