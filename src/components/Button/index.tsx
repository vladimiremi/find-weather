import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

export interface IButton extends TouchableOpacityProps {
  title: string;
}

export function Button({ title }: IButton) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
