import { Home } from './src/screens/Home';
import {
  Overpass_700Bold,
  Overpass_600SemiBold,
  Overpass_400Regular,
  Overpass_300Light,
  useFonts,
} from '@expo-google-fonts/overpass';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
    Overpass_600SemiBold,
    Overpass_400Regular,
    Overpass_300Light,
  });
  return fontsLoaded ? <Home /> : false;
}
