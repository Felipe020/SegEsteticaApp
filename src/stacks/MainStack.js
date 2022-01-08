import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
	CadastroEstabelecimento,
	CadastroUsuario,
	Login,
	PaginaInicial,
} from "@seg-estetica/screens";

import { TabStack } from "./TabStack";

const Stack = createNativeStackNavigator();

export const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="PaginaInicial" component={PaginaInicial} />
			<Stack.Screen name="CadastrarUsuario" component={CadastroUsuario} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen
				name="CadastroEstabelecimento"
				component={CadastroEstabelecimento}
			/>
			<Stack.Screen name="Principal" component={TabStack} />
		</Stack.Navigator>
	);
};
