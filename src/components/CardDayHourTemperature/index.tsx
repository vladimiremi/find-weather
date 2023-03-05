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

const CardDayHourTemperature = () => {
  const theme = useTheme();
  return (
    <Container>
      {[0, 1, 2, 3, 4].map(() => (
        <ContainerItem>
          <ContainerDate>
            <Text
              color={theme.COLORS.WHITE}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              Seg
            </Text>
            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              {' '}
              Jan, 02
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
              Novoeiro
            </Text>
          </ContainerClimate>

          <ContainerTemperature>
            <Text
              color={theme.COLORS.WHITE}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              23º{' '}
            </Text>
            <Text
              color={theme.COLORS.GRAY_100}
              fontSize={theme.FONT_SIZE.XS}
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            >
              / 12º
            </Text>
          </ContainerTemperature>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default CardDayHourTemperature;
