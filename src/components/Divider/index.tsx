import { Container } from './styles';

export interface IDivider {
  top?: number;
  bottom?: number;
}

const Divider = ({ top, bottom }: IDivider) => {
  return <Container top={top} bottom={bottom} />;
};

export default Divider;
