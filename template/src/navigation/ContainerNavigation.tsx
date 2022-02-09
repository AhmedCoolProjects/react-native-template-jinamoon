import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { About, Home, Profile } from '../screens';
import { Header } from '../components';

const Stack = createStackNavigator();

export const ContainerNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          header: ({ navigation }) => (
            <Header
              title="Jina Moon"
              right={{
                onPress: () => navigation.navigate('About'),
              }}
            />
          ),
          headerShown: true,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
