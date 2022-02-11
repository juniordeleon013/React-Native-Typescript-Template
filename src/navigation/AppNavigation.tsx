import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';

const TabsNav = createBottomTabNavigator();

export const MyAppNavigation = () => {
  return (
    <NavigationContainer>
      <TabsNav.Navigator
        initialRouteName="HomeScreen"
      >
        <TabsNav.Screen name="HomeScreen" component={HomeScreen} />
        <TabsNav.Screen name="LoginScreen" component={LoginScreen} />
      </TabsNav.Navigator>
    </NavigationContainer>
  );
}