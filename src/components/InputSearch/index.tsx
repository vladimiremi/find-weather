import { useTheme } from 'styled-components/native';
import {
  Container,
  ContainerIconLocation,
  ContainerIconSearch,
  Input,
} from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const InputSearch = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContainerIconSearch>
        <AntDesign name="search1" size={24} color={theme.COLORS.WHITE} />
      </ContainerIconSearch>

      <Input
        placeholderTextColor={theme.COLORS.GRAY_200}
        placeholder="Digite o nome de uma cidade"
      />
      <ContainerIconLocation>
        <Ionicons
          name="ios-location-sharp"
          size={30}
          color={theme.COLORS.WHITE}
        />
      </ContainerIconLocation>
    </Container>
  );
};

export default InputSearch;
