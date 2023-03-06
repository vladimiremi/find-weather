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
import Empty from '../../components/Empty';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { FindWeatherAPI } from '../../services/FindWeatherAPI';
import { ActivityIndicator } from 'react-native';

function Search() {
  const theme = useTheme();
  const [search, useSearch] = useState('');
  const [cities, setCities] = useState<ICityDataProps[]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchCity = async (city: string) => {
    try {
      setIsLoading(true);
      const resp = await FindWeatherAPI.getSearch(city);
      setCities(resp.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
      {!!cities?.length ? <CityBox data={cities} /> : <Empty />}
    </Container>
  );
}

export default React.memo(Search);
