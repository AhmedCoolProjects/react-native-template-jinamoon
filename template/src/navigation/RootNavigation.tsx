import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthNavigation } from './AuthNavigation';
import { ContainerNavigation } from './ContainerNavigation';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="Container" component={ContainerNavigation} />
    </Stack.Navigator>
  );
};
