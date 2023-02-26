import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import { useTheme } from 'styled-components/native';

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Home"
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
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="house-damage" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Screen
        name="search"
        component={Home}
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
