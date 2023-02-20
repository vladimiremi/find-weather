import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  margin-top: 74px;
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 54px;
  max-height: 54px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
