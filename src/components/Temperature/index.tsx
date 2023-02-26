import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { Container } from './styles';

interface ITemperature {
  value: number;
  fontSize?: number;
  colorSymbol?: string;
}

export const Temperature = ({ value, fontSize, colorSymbol }: ITemperature) => {
  const theme = useTheme();
  return (
    <Container>
      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        fontSize={fontSize || theme.FONT_SIZE.GIANT}
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
