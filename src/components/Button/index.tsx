import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

export interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  backgroundColor: string;
  borderColor?: string;
  borderRadius: number;
  height: number;
}

export const Button = ({
  backgroundColor,
  borderColor = 'transparent',
  children,
  borderRadius,
  height,
  ...rest
}: IButton) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      {...rest}
    >
      {children}
    </Container>
  );
};
