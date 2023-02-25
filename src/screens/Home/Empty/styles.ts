import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs<ScrollViewProps>(() => ({
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 0 16px;
`;

export const ContainerImage = styled.View`
  align-self: center;
`;

export const Image = styled.Image`
  width: 243px;
  height: 256px;
`;
