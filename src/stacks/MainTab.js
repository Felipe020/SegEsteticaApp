import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomTabBar from '../components/CustomTabBar';

import {Feed} from 'screens/Feed';
import Search from 'screens/Search';
import Appointments from 'screens/Appointments';
import Favoritos from 'screens/Favoritos';
import Profile from 'screens/Profile';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}  screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favoritos" component={Favoritos} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);