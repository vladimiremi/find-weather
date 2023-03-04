import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
const { Navigator, Screen } = createBottomTabNavigator();
import { useTheme } from 'styled-components/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator: StackNavigation, Screen: StackScreen } =
  createNativeStackNavigator();

import Search from '../screens/Search';
import { StackAppRoutes } from './stackApp.routes';

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: theme.COLORS.DARK,
              flex: 1,
              borderWidth: 0,
            }}
          ></View>
        ),
        tabBarActiveTintColor: theme.COLORS.WHITE,
        tabBarInactiveTintColor: theme.COLORS.GRAY_500,
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Screen
        name="homeTab"
        component={StackAppRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="house-damage" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
          tabBarLabel: 'Busca',
        }}
      />
    </Navigator>
  );
}
