import { TextProps } from 'react-native';
import Styled from './styles';

export interface IText extends TextProps {
  children: React.ReactNode;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign?: 'center' | 'right' | 'left';
}

export const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  textAlign = 'center',
  ...rest
}: IText) => {
  return (
    <Styled.Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Styled.Text>
  );
};
