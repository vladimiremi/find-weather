import { useTheme } from 'styled-components/native';
import { Input } from './styles';
import { TextInputProps } from 'react-native';

const InputSearch = ({ ...rest }: TextInputProps) => {
  const theme = useTheme();
  return (
    <Input
      placeholderTextColor={theme.COLORS.GRAY_200}
      placeholder="Digite o nome de uma cidade"
      {...rest}
    />
  );
};

export default InputSearch;
