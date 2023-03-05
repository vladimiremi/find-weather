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

function Search() {
  const theme = useTheme();
  const [search, useSearch] = useState('');
  const [cities, setCities] = useState<ICityDataProps[]>();
  const handleSearchCity = async (city: string) => {
    try {
      const resp = await FindWeatherAPI.getSearch(city);
      setCities(resp.data);
    } catch (error) {
      console.log(error);
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

      <Divider top={42} />
      {!!cities?.length ? <CityBox data={cities} /> : <Empty />}
    </Container>
  );
}

export default React.memo(Search);
