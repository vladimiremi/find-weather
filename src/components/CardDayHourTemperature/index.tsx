import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  Container,
  ContainerClimate,
  ContainerDate,
  ContainerItem,
  ContainerTemperature,
  Icon,
} from './styles';
import WindMiniature from '../../assets/images/wind-miniature.png';
import Divider from '../Divider';
import { IMoreDays } from '../../utils/moreDays.interface';

interface ICardDayHourTemperature {
  data: IMoreDays[];
}

const CardDayHourTemperature = ({ data }: ICardDayHourTemperature) => {
  const theme = useTheme();
  return (
    <Container>
      {data.map((day) => (
        <ContainerItem>
          <ContainerDate>
            <Text
              color={theme.COLORS.WHITE}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              {day.date.weekday}
            </Text>
            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              {' '}
              {day.date.month}, {day.date.day}
            </Text>
          </ContainerDate>
          <ContainerClimate>
            <Icon source={WindMiniature} />
            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
              style={{ marginLeft: 2 }}
            >
              {day.condition.text}
            </Text>
          </ContainerClimate>

          <ContainerTemperature>
            <Text
              color={theme.COLORS.WHITE}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              {day.temp_c_max}º{' '}
            </Text>
            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              / {day.temp_c_min}º
            </Text>
          </ContainerTemperature>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default CardDayHourTemperature;
