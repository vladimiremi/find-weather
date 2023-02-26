import { ImageSourcePropType } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { Container, Icon } from './styles';

interface IClimateDay {
  temperature: number;
  icon: ImageSourcePropType;
  time: string;
}

export const ClimateDay = ({ icon, temperature, time }: IClimateDay) => {
  const theme = useTheme();
  return (
    <Container>
      <Text
        color={theme.COLORS.WHITE}
        fontSize={theme.FONT_SIZE.XS}
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
      >
        {temperature}°
      </Text>

      <Icon source={icon} />
      <Text
        color={theme.COLORS.GRAY_100}
        fontSize={theme.FONT_SIZE.XXXS}
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
      >
        09:00
      </Text>
    </Container>
  );
};
