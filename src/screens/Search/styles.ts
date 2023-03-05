import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  padding: 0 16px;
`;

export const ContainerSearch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerIconSearch = styled.View`
  position: absolute;
  z-index: 1;
  left: 11px;
`;

export const ContainerIconLocation = styled.TouchableOpacity`
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
