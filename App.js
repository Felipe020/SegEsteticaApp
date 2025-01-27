import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { SegEsteticaGlobalContext } from "@seg-estetica/contexts";
import { MainStack } from '@seg-estetica/stacks';

export default function App() {
  return (
    <SegEsteticaGlobalContext>
      <StatusBar barStyle="light-content" backgroundColor="#2E2E2E" />

      <NavigationContainer >
        <MainStack />
      </NavigationContainer>
    </SegEsteticaGlobalContext>
  );
}
