import { View } from 'react-native';
import React from 'react';
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
  ContainerDays,
  ContainerImage,
  ContainerTitle,
  Image,
  NextDays,
} from './styles';
import { Temperature } from '../../components/Temperature';
import { ClimateStatistics } from '../../components/ClimateStatistics';
import { ClimateDay } from '../../components/ClimateDay';
import RainingCloudMiniature from '../../assets/images/raining-cloud-miniature.png';

function Home() {
  const theme = useTheme();

  return (
    <>
      {false ? (
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

          <Temperature value={10} />

          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.LG}
            color={theme.COLORS.GRAY_100}
          >
            Chuva Moderada
          </Text>

          <Divider top={45} />

          <ClimateStatistics />

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
                // onPress={() => navigation.navigate('home')}
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
          <ContainerDays>
            {[1, 2, 3, 4].map((item, index) => (
              <ClimateDay
                key={index}
                icon={RainingCloudMiniature}
                temperature={10}
                time={'19:00'}
              />
            ))}
          </ContainerDays>
        </Container>
      )}
    </>
  );
}

export default React.memo(Home);
