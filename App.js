import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CadastroEstabelecimento,
  CadastroUsuario,
  Logar,
  PaginaInicial,
} from 'screens';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="PaginaInicial"
          component={PaginaInicial}
        />
        <Stack.Screen
          name="CadastrarUsuario"
          component={CadastroUsuario}
        />
        <Stack.Screen
          name="Logar"
          component={Logar}
        />
        <Stack.Screen
          name="CadastroEstabelecimento"
          component={CadastroEstabelecimento}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <MyStack />
  );
}
