import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components/native';
import { formatDate, getHourAndMinute } from '../../utils/formatDate';
import { WeatherIcons } from '../../utils/weatherIcons';

import Divider from '../Divider';

import { Text } from '../Text';
import { Container, ContainerCard, Icon, ContainerTemperature } from './styles';

interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: string;
  hour: string;
  condition: {
    text: string
  }
}
interface ICardHourTemperatureData {
  data: ICardHourTemperature;
}


export const CardHourTemperature = ({ data, }: ICardHourTemperatureData) => {
  const theme = useTheme();

  return (
   
            <ContainerCard>
            <ContainerTemperature>
              <Text
                color={theme.COLORS.WHITE}
                fontSize={theme.FONT_SIZE.XS}
                fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
              >
                {data.temperatureValue}
              </Text>
              <Text
                fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
                fontSize={theme.FONT_SIZE.XXXS}
                color={theme.COLORS.GRAY_100}
                style={{ paddingBottom: 9 }}
              >
                º
              </Text>
            </ContainerTemperature>
            <Divider top={8} />
            <Icon source={WeatherIcons({ weather: data.condition.text, hours: Number(data.hour.split(':')[0]) })} />
            <Divider top={9} />

            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XXXS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
            >
              {data.hour}
            </Text>
          </ContainerCard>
  
  );
};
