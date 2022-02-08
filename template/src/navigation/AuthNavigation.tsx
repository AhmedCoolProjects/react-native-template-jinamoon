import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { ForgotPassword, Login, Register } from '../screens';
import { Header } from '../components';
import { Alert } from 'react-native';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
        headerShown: true,
        header: () => (
          <Header
            title="Jina Moon"
            right={{
              onPress: () => Alert.alert('Login?', 'Please login first'),
            }}
          />
        ),
      }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};
