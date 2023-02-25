import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  Container,
  ContainerItem,
  ContainerItemInLine,
  ContainerItemWithLine,
  Icon,
  Line,
} from './styles';
import WindMiniature from '../../assets/images/wind-miniature.png';
import DropMiniature from '../../assets/images/drop-miniature.png';
import RainingCloudMiniature from '../../assets/images/raining-cloud-miniature.png';

export const ClimateStatistics = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContainerItem>
        <Icon source={DropMiniature} />
        <Text
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.WHITE}
          fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        >
          24%
        </Text>
        <Text
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_300}
          fontFamily={theme.FONT_FAMILY.OVERPASS_LIGHT}
          style={{ lineHeight: 18 }}
        >
          Umidade
        </Text>
      </ContainerItem>
      <ContainerItemWithLine>
        <Line />
        <ContainerItemInLine>
          <Icon source={WindMiniature} />

          <Text
            fontSize={theme.FONT_SIZE.XS}
            color={theme.COLORS.WHITE}
            fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
          >
            20km/h
          </Text>

          <Text
            fontSize={theme.FONT_SIZE.XS}
            color={theme.COLORS.GRAY_300}
            fontFamily={theme.FONT_FAMILY.OVERPASS_LIGHT}
            style={{ lineHeight: 18 }}
          >
            Veloc. Vento
          </Text>
        </ContainerItemInLine>
        <Line />
      </ContainerItemWithLine>

      <ContainerItem>
        <Icon source={RainingCloudMiniature} />

        <Text
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.WHITE}
          fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        >
          76%
        </Text>

        <Text
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_300}
          fontFamily={theme.FONT_FAMILY.OVERPASS_LIGHT}
          style={{ lineHeight: 18 }}
        >
          Chuva
        </Text>
      </ContainerItem>
    </Container>
  );
};
