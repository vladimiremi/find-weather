import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 16px 16px 16px 46px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  width: 80%;
`;

export const ContainerIconSearch = styled.View`
  position: absolute;
  z-index: 1;
  left: 11px;
`;

export const ContainerIconLocation = styled.View`
  margin-left: 16px;
  width: 15%;
  height: 100%;
  padding: 9px;
  flex-direction: row;
  justify-content: center;

  align-items: center;
  justify-self: center;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
