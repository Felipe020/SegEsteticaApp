import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from 'components';

import {
    Appointments,
    Favoritos,
    Feed,
    Profile,
    Search
} from 'screens';

const Tab = createBottomTabNavigator();

export const TabStack = () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);
