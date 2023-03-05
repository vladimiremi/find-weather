import { Container, ContainerImage, Image } from './styles';
import NotFound from '../../assets/images/not-found-destination.png';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import Divider from '../Divider';

const Empty = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContainerImage>
        <Image source={NotFound} />
      </ContainerImage>
      <Divider top={40} />

      <Text
        color={theme.COLORS.GRAY_100}
        fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
        fontSize={theme.FONT_SIZE.XS}
      >
        OPS!
      </Text>

      <Text
        color={theme.COLORS.GRAY_100}
        fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
        fontSize={theme.FONT_SIZE.XS}
      >
        Não foi possível encontrar o local desejado!
      </Text>
    </Container>
  );
};

export default Empty;
