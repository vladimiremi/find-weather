import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { Container } from './styles';

interface ITemperature {
  value: number;
  colorSymbol?: string;
}

export const Temperature = ({ value, colorSymbol }: ITemperature) => {
  const theme = useTheme();
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={theme.FONT_SIZE.GIANT}
        color={theme.COLORS.WHITE}
        style={{ lineHeight: 96 }}
      >
        {value}
      </Text>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.LG}
        color={colorSymbol || theme.COLORS.WHITE}
        style={{ lineHeight: 50 }}
      >
        °
      </Text>
    </Container>
  );
};
