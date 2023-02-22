import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 0 16px;
`;

export const ContainerLogo = styled.View`
  align-self: center;
`;

export const Logo = styled.Image`
  width: 222px;
  height: 214px;
`;
