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
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

interface ICityBox {
  data: ICityDataProps[];
}

const CityBox = ({ data }: ICityBox) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Container>
      {data.map(item => (
        <ContainerItem
          key={item.id + Math.random()}
          onPress={() =>
            navigation.navigate('home/moredays', { city: item.name })
          }
        >
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
            {item.name}
          </Text>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default CityBox;
