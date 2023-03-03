import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  width: 155px;
  padding: 12px;
  border-radius: 20px;
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
