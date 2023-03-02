import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const ContainerCity = styled.View`
  flex-direction: row;
  justify-content: center;
  align-self: center;
  flex-grow: 1;
`;

export const ContainerCityName = styled.View`
  align-items: flex-start;
  margin-left: 6px;
`;

export const ContainerBackButton = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
