import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ContainerCard = styled.View`
  padding: 8px 18px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.COLORS.DARK_100};
`;

export const ContainerTemperature = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
width: 39px;
  height: 27px;
`;
