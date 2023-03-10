import {
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
  useFonts,
} from '@expo-google-fonts/overpass';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import { UserProvider } from './src/context/userContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_600SemiBold,
    Overpass_400Regular,
    Overpass_300Light,
  });
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : false}
      </UserProvider>

    </ThemeProvider>
  );
}
