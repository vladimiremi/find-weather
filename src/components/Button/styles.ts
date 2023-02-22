import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { IButton } from '.';

export const Container = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: '0.75',
}))<IButton>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  height: ${({ height }) => height}px;
  justify-content: center;

  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderColor }) => borderColor && 1}px;
`;
