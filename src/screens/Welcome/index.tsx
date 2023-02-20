import { Text } from 'react-native';
import { Button } from '../../components/Button';
import { Container, ContainerLogo, Logo, Subtitle, Title } from './styles';
import logoImage from '../../assets/images/cloud-and-thunder.png';

interface IWelcome {}

export function Welcome({}: IWelcome) {
  return (
    <Container>
      <ContainerLogo>
        <Logo source={logoImage} />
      </ContainerLogo>
      <Title>Descubra o Clima na sua Cidade</Title>
      <Subtitle>
        Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma
        da sua mão
      </Subtitle>

      <Button title="Iniciar" />
    </Container>
  );
}
