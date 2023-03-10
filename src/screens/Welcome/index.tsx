import React from 'react';
import { useTheme } from 'styled-components/native';
import { Container, ContainerLogo, Logo } from './styles';
import logoImage from '../../assets/images/cloud-and-thunder.png';

import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import Divider from '../../components/Divider';
import { setStoreData } from '../../storage';
import { userStatus } from '../../context/userContext';

const LetterBold = () => {
  const theme = useTheme();

  return (
    <Text
      fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
      fontSize={theme.FONT_SIZE.MD}
      color={theme.COLORS.GRAY_100}
    >
      Weather
    </Text>
  );
};

function Welcome() {
  const theme = useTheme();
  const { setFirstAccess } = userStatus();

  return (
    <Container>
      <Divider top={137} />
      <ContainerLogo>
        <Logo source={logoImage} />
      </ContainerLogo>
      <Divider top={57} />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
        fontSize={theme.FONT_SIZE.XXL}
        color={theme.COLORS.WHITE}
        textAlign="center"
        style={{ width: 300, alignSelf: 'center' }}
      >
        Descubra o Clima na sua Cidade
      </Text>
      <Divider top={33} />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.MD}
        color={theme.COLORS.GRAY_100}
      >
        Com o Find
        <LetterBold /> nunca ficou tão fácil ter a previsão do tempo na palma da
        sua mão
      </Text>

      <Divider top={74} />

      <Button
        backgroundColor={theme.COLORS.DARK_300}
        borderColor={theme.COLORS.DARK_300}
        borderRadius={18}
        height={54}
        onPress={() => { }}
      >
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.MD}
          color={theme.COLORS.WHITE}
          textAlign="center"
          onPress={() => {
            setStoreData({ storageKey: 'firstAccess', value: 'true' })
            setFirstAccess(true)
          }}
        >
          Iniciar
        </Text>
      </Button>
      <Divider bottom={10} />
    </Container>
  );
}

export default React.memo(Welcome);
