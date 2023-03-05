import {
  Container,
  ContainerBackButton,
  ContainerCity,
  ContainerCityName,
} from './styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import { ReactNode } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface IHeader {
  title: string;
  icon?: ReactNode;
}

export const Header = ({ icon, title }: IHeader) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerBackButton onPress={() => navigation.navigate('home')}>
        <AntDesign name="left" size={22} color={theme.COLORS.WHITE} />
      </ContainerBackButton>
      <ContainerCity>
        {icon}
        <ContainerCityName>
          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.SM}
            color={theme.COLORS.WHITE}
            style={{ lineHeight: 23 }}
          >
            {title}
          </Text>
        </ContainerCityName>
      </ContainerCity>
    </Container>
  );
};
