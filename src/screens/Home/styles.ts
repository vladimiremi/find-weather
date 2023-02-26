import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs<ScrollViewProps>(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 0 16px;
`;

export const ContainerCity = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ContainerCityName = styled.View`
  align-items: flex-start;
`;

export const ContainerImage = styled.View`
  align-self: center;
`;

export const Image = styled.Image`
  width: 172px;
  height: 140px;
`;

export const ContainerTitle = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const NextDays = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerDays = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
