import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import {
  Container,
  MaxTemperatureContainer,
  MinTemperatureContainer,
} from './styles';
import { FadeIn } from 'react-native-reanimated';

interface ITemperature {
  minTemp?: number;
  maxTemp: number;
  minTempFontSize: number;
  maxTempFontSize: number;
}

export const Temperature = ({
  minTemp,
  maxTemp,
  minTempFontSize,
  maxTempFontSize,
}: ITemperature) => {
  const theme = useTheme();
  return (
    <Container entering={FadeIn.duration(2000)}>
      <MaxTemperatureContainer>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
          fontSize={maxTempFontSize}
          color={theme.COLORS.WHITE}
        >
          {maxTemp}
        </Text>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.LG}
          color={theme.COLORS.WHITE}
          style={{ paddingBottom: 35 }}
        >
          °
        </Text>
      </MaxTemperatureContainer>
      {
        !!minTemp && (
          <MinTemperatureContainer>
            <Text
              fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
              fontSize={minTempFontSize}
              color={theme.COLORS.GRAY_100}
            >
              {''} / {''} {minTemp}
            </Text>
            <Text
              fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
              fontSize={theme.FONT_SIZE.MD}
              color={theme.COLORS.GRAY_100}
              style={{ paddingBottom: 24 }}
            >
              º
            </Text>
          </MinTemperatureContainer>
        )
      }

    </Container>
  );
};
