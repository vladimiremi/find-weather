import React from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../../components/Divider';
import { Text } from '../../../components/Text';
import { Container, ContainerImage, Image } from './styles';

import ClimateChange from '../../../assets/images/climate-change.png';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { removeItemStoreData } from '../../../storage';

export function Empty() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <Divider top={74} />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_SEMI_BOLD}
        fontSize={theme.FONT_SIZE.XXL}
        color={theme.COLORS.WHITE}
        textAlign="center"
        style={{ width: 300, alignSelf: 'center' }}
      >
        FindWeather
      </Text>
      <Divider top={105} />

      <TouchableOpacity onPress={() => removeItemStoreData('firstAccess')}>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XS}
          color={theme.COLORS.GRAY_100}
          style={{ lineHeight: 20 }}
        >
          apagar
        </Text>
      </TouchableOpacity>

      <ContainerImage>
        <Image source={ClimateChange} />
      </ContainerImage>
      <Divider top={105} />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.MD}
        color={theme.COLORS.GRAY_100}
        style={{ textDecorationLine: 'underline' }}
        onPress={() => navigation.navigate('search')}
      >
        Selecione aqui um local e encontre o clima em tempo real
      </Text>
    </>
  );
}
