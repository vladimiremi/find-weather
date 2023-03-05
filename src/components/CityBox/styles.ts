import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ContainerItem = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 155px;
  padding: 12px;
  border-radius: 20px;
  margin: 10px;
`;

export const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerIcon = styled.View``;

export const Icon = styled.Image`
  width: 39px;
  height: 27px;
`;

export const ContainerWeather = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
