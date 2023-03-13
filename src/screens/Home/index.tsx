import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Text } from '../../components/Text';
import { Ionicons } from '@expo/vector-icons';
import RainingImage from '../../assets/images/raining.png';
import { AntDesign } from '@expo/vector-icons';

import { Empty } from './Empty';
import {
  Container,
  ContainerCity,
  ContainerCityName,
  ContainerImage,
  ContainerTitle,
  Image,
  NextDays,
  Separator,
} from './styles';
import { Temperature } from '../../components/Temperature';
import { WeatherDescription } from '../../components/WeatherDescription';
import { CardHourTemperature } from '../../components/CardHourTemperature';
import DropMiniaturePNG from '../../assets/images/drop-miniature.png';
import WindMiniaturePNG from '../../assets/images/wind-miniature.png';
import RainingCloudPNG from '../../assets/images/raining-cloud-miniature.png';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStoreData, removeItemStoreData } from '../../storage';
import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { ICurrent, IForecastData, ILocation, ISearchData } from '../../utils/search.interce'
import { formatDate } from '../../utils/formatDate';
import { Button } from '../../components/Button';



const dataCardHourTemperature = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    temperatureValue: 23,
    hour: '09:00',
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    temperatureValue: 18,
    hour: '13:00',
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: '17:00',
  },

  {
    id: 4,
    icon: RainingCloudPNG,
    temperatureValue: 8,
    hour: '23:00',
  },
];
interface IFullContentData {
  location: ILocation;
  current: ICurrent;
  forecast: {
    forecastday: Array<IForecastData>;
  };
  date: string;
}

const FullComponent = ({
  location,
  current,
  forecast,
  date,
}: IFullContentData) => {
  const theme = useTheme()
  const { humidity, wind_kph } = current;
  const { daily_chance_of_rain } = forecast.forecastday[0].day;
  const navigation = useNavigation()

  const dataWeatherDescription = [
    {
      id: 1,
      icon: DropMiniaturePNG,
      value: `${humidity}%`,
      text: "Umidade",
    },

    {
      id: 2,
      icon: WindMiniaturePNG,
      value: `${Math.floor(wind_kph)}km/h`,
      text: "Veloc. Vento",
    },

    {
      id: 3,
      icon: RainingCloudPNG,
      value: `${Math.floor(daily_chance_of_rain)}%`,
      text: "Chuva",
    },
  ];

  return (
    <>

      <Divider top={51} />
      <ContainerCity>
        <Ionicons
          name="location-sharp"
          size={22}
          color={theme.COLORS.WHITE}
        />
        <ContainerCityName>
          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.SM}
            color={theme.COLORS.WHITE}
            style={{ lineHeight: 23 }}
          >
            {`${location.name}, ${location.country}`}
          </Text>
          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.XS}
            color={theme.COLORS.GRAY_100}
            style={{ lineHeight: 20 }}
          >
            {date}
          </Text>
        </ContainerCityName>
      </ContainerCity>
      <Divider top={43} />
      <TouchableOpacity onPress={() => removeItemStoreData('city')}>
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
        <Image source={RainingImage} />
      </ContainerImage>

      <Temperature
        maxTemp={Math.floor(current.temp_c)}


        maxTempFontSize={theme.FONT_SIZE.GIANT}
        minTempFontSize={theme.FONT_SIZE.XL}
      />

      <Text
        fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
        fontSize={theme.FONT_SIZE.LG}
        color={theme.COLORS.GRAY_100}
      >
        {current.condition.text}

      </Text>

      <Divider top={45} />

      <WeatherDescription data={dataWeatherDescription} />

      <Divider top={45} />

      <ContainerTitle>
        <Text
          fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
          fontSize={theme.FONT_SIZE.XMD}
          color={theme.COLORS.WHITE}
        >
          Hoje
        </Text>

        <NextDays onPress={() => { }}>
          <Text
            fontFamily={theme.FONT_FAMILY.OVERPASS_REGULAR}
            fontSize={theme.FONT_SIZE.XS}
            color={theme.COLORS.GRAY_100}
            textAlign="center"
            onPress={() => navigation.navigate('home/moredays')}
          >
            Próximos 5 dias
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color={theme.COLORS.GRAY_100}
          />
        </NextDays>
      </ContainerTitle>

      <Divider top={27} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={forecast.forecastday[0].hour}
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item, index }) => {
          const dataCardHourTemperature = [
            {
              id: index,
              icon: item.condition.icon,
              temperatureValue: Math.floor(item.temp_c),
              hour: item.time.substring(11, 16),
            },
          ];

          return (
            <CardHourTemperature data={dataCardHourTemperature} key={index} />
          )
        }}
      />

    </>
  )
}

function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [response, setResponse] = useState<ISearchData>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [currentDate, setCurrentDate] = useState(null);


  const getDate = () => {
    setCurrentDate(formatDate(new Date()));
  };

  const getCityName = useCallback(async () => {
    const storedCity = await getStoreData({ storageKey: 'city' });
    setCity(storedCity);

    setIsLoading(false);
  }, [])

  const getInfos = async () => {
    setCity(city);
    if (city) {
      const resp = await FindWeatherAPI.getForecast(city);

      const data = resp.data;
      setResponse(data)

    }

  }

  useFocusEffect(
    useCallback(() => {
      getCityName();
    }, [])
  );


  useEffect(() => {
    if (city) {
      getInfos();
      getDate();
    } else {
      setIsLoading(false);
      setResponse(null);
    }
  }, [city, refreshing]);


  const onRefresh = async () => {
    setRefreshing(true);
    await getInfos()
    setTimeout(() => setRefreshing(false), 2000);
  };



  return (
    <Container refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

      {!city && (
        <Empty />
      )}
      {
        !!response && (

          <FullComponent current={response.current}
            location={response.location}
            forecast={response.forecast}
            date={currentDate} />
        )
      }
    </Container>

  );
}

export default React.memo(Home);
