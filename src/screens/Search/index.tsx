import React, { useState } from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header';
import {
  Container,
  ContainerIconLocation,
  ContainerIconSearch,
  ContainerSearch,
} from './styles';
import InputSearch from '../../components/InputSearch';
import CityBox, { ICityDataProps } from '../../components/CityBox';
import ErrorContent from '../../components/ErrorContent';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { ActivityIndicator } from 'react-native';
import { ISearchData } from '../../utils/search.interce';

function Search() {
  const theme = useTheme();
  const [search, useSearch] = useState('');
  const [city, setCity] = useState({} as ICityDataProps);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<ISearchData>(null);

  const handleSearchCity = async (city: string) => {
    try {
      setIsLoading(true);
      const resp = await FindWeatherAPI.getForecast(city);

      setResponse(resp.data);

      const { location, current } = resp.data;

      setCity({
        location: {
          name: location.name,
          region: location.region,
          country: location.country,
        },
        current: {
          temp_c: current.temp_c,
        },
        condition: {
          text: current.condition.text,
          icon: current.condition.icon,
        },
      });
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <Container>
      <Divider top={52} />

      <Header title="Busca" />

      <Divider top={48} />

      <ContainerSearch>
        <ContainerIconSearch>
          <AntDesign name="search1" size={24} color={theme.COLORS.WHITE} />
        </ContainerIconSearch>
        <InputSearch value={search} onChangeText={value => useSearch(value)} />
        <ContainerIconLocation onPress={() => handleSearchCity(search)}>
          <Ionicons
            name="ios-location-sharp"
            size={30}
            color={theme.COLORS.WHITE}
          />
        </ContainerIconLocation>
      </ContainerSearch>

      {isLoading && (
        <>
          <Divider top={40} />
          <ActivityIndicator size="small" color={theme.COLORS.WHITE} />
        </>
      )}

      <Divider top={42} />
      {!!isError && <ErrorContent />}
      {!!response && !isError && !isLoading && <CityBox data={city} />}
    </Container>
  );
}

export default React.memo(Search);
