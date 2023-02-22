import styled from 'styled-components/native';
import { IDivider } from '.';

export const Container = styled.View<IDivider>`
  margin-top: ${({ top }) => (top ? top : 0)}px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : 0)}px;
`;
