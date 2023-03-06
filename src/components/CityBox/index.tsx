import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  Container,
  ContainerIcon,
  ContainerItem,
  ContainerTemperature,
  ContainerWeather,
  Icon,
} from './styles';
import Cloud from '../../assets/images/volcanic-ash-cloud.png';
import Divider from '../Divider';
import { useNavigation } from '@react-navigation/native';

export interface ICityDataProps {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
  };
  condition: {
    text: string;
    icon: string;
  };
}

interface ICityBox {
  data: ICityDataProps;
}

const CityBox = ({ data }: ICityBox) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { location, current, condition } = data;
  return (
    <Container>
      <ContainerItem
        key={Math.random()}
        onPress={() =>
          navigation.navigate('home/moredays', { city: location.name })
        }
      >
        <ContainerWeather>
          <ContainerTemperature>
            <Text
              color={theme.COLORS.WHITE}
              fontSize={theme.FONT_SIZE.LG}
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
            >
              {current && Math.floor(current.temp_c)}
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
            <Icon source={{ uri: `https:${condition.icon}` }} />
          </ContainerIcon>
        </ContainerWeather>

        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.GRAY_100}
          style={{ textAlign: 'left' }}
        >
          {condition.text}
        </Text>

        <Divider bottom={10} />

        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.SM}
          color={theme.COLORS.WHITE}
          style={{ textAlign: 'left' }}
        >
          {location.name}, {location.region && location.region + ','}{' '}
          {location.country}
        </Text>
      </ContainerItem>
    </Container>
  );
};

export default CityBox;
