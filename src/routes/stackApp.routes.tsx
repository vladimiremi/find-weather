import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import Home from '../screens/Home';
import MoreDays from '../screens/MoreDays';

export function StackAppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="home/moredays" component={MoreDays} />
    </Navigator>
  );
}
