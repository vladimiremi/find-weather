import React from 'react';
import { useTheme } from 'styled-components/native';
import Divider from '../../components/Divider';
import { Header } from '../../components/Header';
import { Container } from './styles';
import InputSearch from '../../components/InputSearch';
import CityBox from '../../components/CityBox';
import Empty from '../../components/Empty';

function Search() {
  const theme = useTheme();
  return (
    <Container>
      <Divider top={51} />

      <Header title="Busca" />

      <Divider top={48} />

      <InputSearch />

      <Divider top={42} />
      {true ? <CityBox /> : <Empty />}
    </Container>
  );
}

export default React.memo(Search);
