import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 16px;
`;

export const Title = styled.Text`
  margin-top: 57px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 33px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
`;

export const Subtitle = styled.Text`
  margin-top: 33px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`;

export const ContainerLogo = styled.View`
  margin-top: 137px;
  align-self: center;
`;

export const Logo = styled.Image`
  width: 222px;
  height: 214px;
`;
