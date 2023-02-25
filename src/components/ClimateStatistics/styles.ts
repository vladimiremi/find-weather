import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 18px;
  /* background-color: red; */
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
`;

export const ContainerItem = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerItemWithLine = styled(ContainerItem)`
  flex-direction: row;
`;

export const ContainerItemInLine = styled(ContainerItem)`
  margin: 0 13px;
`;

export const Line = styled.View`
  width: 1px;
  height: 36px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled.Image``;
