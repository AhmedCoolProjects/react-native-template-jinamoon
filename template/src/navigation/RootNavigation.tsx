import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ContainerNavigation } from './ContainerNavigation';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Container" component={ContainerNavigation} />
    </Stack.Navigator>
  );
};
