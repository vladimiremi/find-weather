import styled from 'styled-components/native';

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 16px 16px 16px 46px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  width: 80%;
`;
