import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default React.memo(Home);
