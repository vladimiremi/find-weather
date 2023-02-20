import { Home } from './src/screens/Home';
import {
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
  useFonts,
} from '@expo-google-fonts/overpass';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { Welcome } from './src/screens/Welcome';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_600SemiBold,
    Overpass_400Regular,
    Overpass_300Light,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Welcome /> : false}
    </ThemeProvider>
  );
}
