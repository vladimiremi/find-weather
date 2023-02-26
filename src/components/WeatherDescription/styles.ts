import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;
  width: 100%;
  border-radius: 18px;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
  width: 33.33%;
`;

export const Line = styled.View`
  width: 1px;
  height: 80%;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled.Image``;
