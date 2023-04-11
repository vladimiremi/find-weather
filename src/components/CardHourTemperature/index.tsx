import { ImageSourcePropType, Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';
import { formatDate, getHourAndMinute } from '../../utils/formatDate';
import { WeatherIcons } from '../../utils/weatherIcons';

import Divider from '../Divider';

import { Text } from '../Text';
import { Container, ContainerCard, Icon, ContainerTemperature } from './styles';
import Animated, { FadeInUp, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const PressableAnimated = Animated.createAnimatedComponent(Pressable);
interface ICardHourTemperature {
  id: number;
  temperatureValue: number;
  icon: string;
  hour: string;
  condition: {
    text: string
  }
}
interface ICardHourTemperatureData {
  data: ICardHourTemperature;
}


export const CardHourTemperature = ({ data, }: ICardHourTemperatureData) => {
  const theme = useTheme();

  const scale = useSharedValue(1);

  const AnimatedContainerStyle = useAnimatedStyle(()=>{
    return {
      transform: [{scale: scale.value}]
    }
  })

  function onPressIn(){
    scale.value = withTiming(1.1)
  }

  function onPressOut(){
    scale.value = withTiming(1)
  }

  return (
   
    <PressableAnimated onPressIn={onPressIn} onPressOut={onPressOut} entering={FadeInUp.delay(data.id * 180)}>
     <ContainerCard style={[AnimatedContainerStyle]}>

     
     
      <ContainerTemperature>
        <Text
          color={theme.COLORS.WHITE}
          fontSize={theme.FONT_SIZE.XS}
          fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
        >
          {data.temperatureValue}
        </Text>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XXXS}
          color={theme.COLORS.GRAY_100}
          style={{ paddingBottom: 9 }}
        >
          º
        </Text>
      </ContainerTemperature>
      <Divider top={8} />
      <Icon source={WeatherIcons({ weather: data.condition.text, hours: Number(data.hour.split(':')[0]) })} />
      <Divider top={9} />

      <Text
        color={theme.COLORS.GRAY_100}
        fontSize={theme.FONT_SIZE.XXXS}
        fontFamily={theme.FONT_FAMILY.OVERPASS_BOLD}
      >
        {data.hour}
      </Text>
       
      </ContainerCard>
    </PressableAnimated>
  
  );
};
