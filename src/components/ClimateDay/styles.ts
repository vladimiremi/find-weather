import styled from 'styled-components/native';

export const Container = styled.View`
  width: 68px;
  height: 90px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  padding: 8px 0;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid ${({ theme }) => theme.COLORS.DARK_100};
`;

export const Icon = styled.Image``;
