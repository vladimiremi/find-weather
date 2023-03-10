import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components/native';
import { formatDate, getHourAndMinute } from '../../utils/formatDate';

import { IDayData } from '../../utils/search.interce';
import Divider from '../Divider';

import { Text } from '../Text';
import { Container, ContainerCard, Icon, ContainerTemperature } from './styles';

interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: ImageSourcePropType;
  hour: string;
}

interface ICardHourTemperatureData {
  data: ICardHourTemperature[];
  teste: IDayData[]
}

export const CardHourTemperature = ({ data, teste }: ICardHourTemperatureData) => {
  const theme = useTheme();

  return (
    <Container>
      {teste.slice(0, 4).map((item, index) => {
        return (
          <ContainerCard key={index}>
            <ContainerTemperature>
              <Text
                color={theme.COLORS.WHITE}
                fontSize={theme.FONT_SIZE.XS}
                fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
              >
                {item.dewpoint_c.toFixed(0)}
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
            <Icon source={{ uri: `https:${item.condition.icon}` }} />
            <Divider top={9} />

            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XXXS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
            >
              {getHourAndMinute(item.time)}
            </Text>
          </ContainerCard>
        )
      })}
    </Container>
  );
};
