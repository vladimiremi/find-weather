import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components/native';
import { formatDate, getHourAndMinute } from '../../utils/formatDate';

import Divider from '../Divider';

import { Text } from '../Text';
import { Container, ContainerCard, Icon, ContainerTemperature } from './styles';

interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: string;
  hour: string;
}
interface ICardHourTemperatureData {
  data: ICardHourTemperature[];
}


export const CardHourTemperature = ({ data, }: ICardHourTemperatureData) => {
  const theme = useTheme();

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <ContainerCard key={index}>
            <ContainerTemperature>
              <Text
                color={theme.COLORS.WHITE}
                fontSize={theme.FONT_SIZE.XS}
                fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
              >
                {item.temperatureValue}
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
            <Icon source={{ uri: `https:${item.icon}` }} />
            <Divider top={9} />

            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XXXS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
            >
              {item.hour}
            </Text>
          </ContainerCard>
        )
      })}
    </Container>
  );
};
