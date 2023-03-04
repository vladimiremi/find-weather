import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
`;

export const ContainerWeather = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 129px;
  height: 114px;
`;

export const ContainerTemperature = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

export const ConatinerDay = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 0 16px;
  border-bottom-right-radius: 53px;
  border-bottom-left-radius: 53px;
`;

export const ContainerDays = styled.View`
  padding: 0 16px;
`;
