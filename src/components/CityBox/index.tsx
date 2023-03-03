import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  Container,
  ContainerIcon,
  ContainerTemperature,
  ContainerWeather,
  Icon,
} from './styles';
import Cloud from '../../assets/images/volcanic-ash-cloud.png';
import Divider from '../Divider';

const CityBox = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContainerWeather>
        <ContainerTemperature>
          <Text
            color={theme.COLORS.WHITE}
            fontSize={theme.FONT_SIZE.LG}
            fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
          >
            13
          </Text>
          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.SM}
            color={theme.COLORS.WHITE}
            style={{ paddingBottom: 9 }}
          >
            º
          </Text>
        </ContainerTemperature>
        <ContainerIcon>
          <Icon source={Cloud} />
        </ContainerIcon>
      </ContainerWeather>

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.GRAY_100}
        style={{ textAlign: 'left' }}
      >
        Nublado
      </Text>

      <Divider bottom={10} />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.SM}
        color={theme.COLORS.WHITE}
        style={{ textAlign: 'left' }}
      >
        Santiago de Compostela, Espanha
      </Text>
    </Container>
  );
};

export default CityBox;
