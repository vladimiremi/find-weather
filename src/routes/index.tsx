import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useTheme } from 'styled-components/native';
import { InitialRoutes } from './initital.routes';

export default function Routes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.DARK }}>
      <NavigationContainer>
        {/* <InitialRoutes /> */}
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
