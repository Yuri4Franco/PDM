import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaRegistrar from './src/TelaRegistrar/TelaRegistrar';
import TelaLogin from './src/TelaLogin/TelaLogin';
import Home from './src/Home/Home';
import CadastroTime from './src/CadastroTime/CadastroTime';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='CadastroTime'>
        <Stack.Screen name="TelaRegistrar" component={TelaRegistrar} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroTime" component={CadastroTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});