import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { SegEsteticaGlobalContext } from "@contexts";
import { MainStack } from '@stacks';

export default function App() {
  return (
    <SegEsteticaGlobalContext>
      <NavigationContainer >
        <MainStack />
      </NavigationContainer>
    </SegEsteticaGlobalContext>
  );
}
