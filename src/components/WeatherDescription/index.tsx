import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { Container, ContainerItem, Icon, Line } from './styles';
import WindMiniature from '../../assets/images/wind-miniature.png';
import DropMiniature from '../../assets/images/drop-miniature.png';
import RainingCloudMiniature from '../../assets/images/raining-cloud-miniature.png';
import Divider from '../Divider';

interface IWeatherDescriptionData {
  id: number;
  icon: ImageSourcePropType;
  value: string;
  text: string;
}

interface IWeatherData {
  data: IWeatherDescriptionData[];
}

export const WeatherDescription = ({ data }: IWeatherData) => {
  const theme = useTheme();
  return (
    <Container>
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          <ContainerItem>
            <Icon source={DropMiniature} />
            <Divider top={6} />
            <Text
              fontSize={theme.FONT_SIZE.XS}
              color={theme.COLORS.WHITE}
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
            >
              {item.value}
            </Text>
            <Text
              fontSize={theme.FONT_SIZE.XXS}
              color={theme.COLORS.GRAY_300}
              fontFamily={theme.FONT_FAMILY.OVERPASS_LIGHT}
            >
              {item.text}
            </Text>
          </ContainerItem>
          {index !== data.length - 1 && <Line />}
        </React.Fragment>
      ))}
    </Container>
  );
};
