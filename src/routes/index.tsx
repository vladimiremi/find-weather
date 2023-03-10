import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useTheme } from 'styled-components/native';
import { InitialRoutes } from './welcome.routes';
import { userStatus } from '../context/userContext';


export default function Routes() {
  const { COLORS } = useTheme();

  const { firstAccess } = userStatus()
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.DARK }}>
      <NavigationContainer>
        {
          firstAccess ? <AppRoutes /> : <InitialRoutes />
        }


      </NavigationContainer>
    </View>
  );
}
