import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  ContainerIcon,
  ContainerItem,
  ContainerTemperature,
  ContainerWeather,
  Icon,
} from './styles';
import Divider from '../Divider';
import { useNavigation } from '@react-navigation/native';
import { WeatherIcons } from '../../utils/weatherIcons';

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
  const hours = new Date().getHours();
  const theme = useTheme();
  const navigation = useNavigation();
  const { location, current, condition } = data;
  return (
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
          <Icon source={WeatherIcons({ weather: "Chuvisco", hours: hours })} />
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
  );
};

export default CityBox;
